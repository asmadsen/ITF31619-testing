import { useMemo, useState } from "react"

export const useFormInput = (initialValue, rules = [], mapper = e => e.target.value) => {
  const [value, setValue] = useState(initialValue)
  const [hasChanged, setHasChanged] = useState(false)

  const validate = value => rules.map(fn => fn(value))
        .filter(error => error !== true)

  const errors = useMemo(
    () => hasChanged ? validate(value) : [],
    [hasChanged, value, validate]
  )

  const errorOptions = useMemo(
    () => rules.length > 0 ? {
      error: errors.length > 0,
      helperText: errors.length > 0 ? errors.join(', ') : null
    } : {},
    [rules, errors]
  )

  return {
    value,
    setValue,
    validate() {
      if (validate(value).length > 0) {
        setHasChanged(true)
        return false
      }
      return true
    },
    props: {
      value,
      onChange: event => {
        setHasChanged(true)
        setValue(mapper(event))
      },
      ...errorOptions
    }
  }
}
