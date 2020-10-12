import React, { useState } from 'react'
import { Counter } from './components/Counter'
import { RegisterForm } from './components/RegisterForm'
import { UserContext } from './hooks/UserContext'

export const App = () => {
  const [username, setUsername] = useState(null)
  return (
    <div>
      <UserContext.Provider value={{ username, setUsername }}>
        <span>Hello World</span>
        <RegisterForm />
      </UserContext.Provider>
    </div>
  )
}
