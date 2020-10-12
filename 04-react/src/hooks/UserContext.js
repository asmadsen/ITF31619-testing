import React, { useContext } from 'react'


export const UserContext = React.createContext()

export const useUser = () => {
  const { username, setUsername } = useContext(UserContext)

  return {
    username,
    setUsername
  }
}
