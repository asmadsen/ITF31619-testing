import React from 'react'

export const TextField = ({ error, helperText, label, ...props }) => {
  return (
      <label>
          {label}
         <input {...props} />
          {error && (
              <span style={{ color: 'red' }}>{helperText}</span>
          )}
      </label>
  )
}
