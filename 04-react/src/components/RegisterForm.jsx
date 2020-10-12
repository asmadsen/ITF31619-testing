import React, { useState, useMemo } from 'react'
import { useFormInput } from '../hooks/useFormInput'
import { useUser } from '../hooks/UserContext'
import { TextField } from './TextField'

export const RegisterForm = () => {
  const firstName = useFormInput('', [
    value => value.length > 2 || 'First name must be longer than 2 characters'
  ])
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [message, _setMessage] = useState(null)
  const [messageTimeout, setMessageTimeout] = useState(null)
  const { setUsername } = useUser()


  const nameIsValid = useMemo(
    () => firstName.value.trim().length > 2 && lastName.trim().length > 2,
    [firstName.value, lastName]
  )


  const setMessage = message => {
    clearTimeout(messageTimeout)
    setMessageTimeout(null)
    _setMessage(message)
  }

  const clear = () => {
    firstName.setValue('')
    setLastName('')
    setAge('')
    setMessage('Content cleared')
    setUsername(null)
    setMessageTimeout(setTimeout(() => {
      setMessage(null)
    }, 2000))
  }



  const submit = () => {
    if (!(/^[\d-.,]+$/.test(age))) {
      setMessage(`Age: "${age}" is not a valid number`)
      return
    }
    const intAge = parseInt(age)
    if (intAge < 0) {
      setMessage(`You can't register user before they're born`)
      return
    }
    if (intAge < 18) {
      setMessage(`Hi ${firstName.value}, you have to wait ${18 - intAge} years before you'll get an account`)
    } else if (intAge < 50) {
      setMessage(`${firstName.value} ${lastName}, you'll have to re-register every 5 years, next time is in ${5 - (intAge % 5)} years`)
    } else {
      setMessage(
        `Hello ${lastName}, welcome your account will expire at age 75, you have ${75 - intAge} years left`
      )
    }
    setUsername(firstName.value)
  }


  return (
    <div>
      <h1>Register user</h1>
      <TextField id="firstName" label="First name:" {...firstName.props} />
      <label>
        Last name:
              <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Age:
              <input id="age" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <button onClick={clear} id="clear">Clear</button>
      <button onClick={submit} disabled={!nameIsValid} id="submit">Submit</button>
      {message != null && (
        <div id="message">
          {message}
        </div>
      )}
    </div>
  )
}
