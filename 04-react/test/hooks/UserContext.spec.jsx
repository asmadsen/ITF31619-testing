import React from 'react'
const { renderHook } = require("@testing-library/react-hooks")
const { useUser, UserContext } = require("../../src/hooks/UserContext")

it('should provide username', () => {
const wrapper = ({children }) => <UserContext.Provider value={{username: 'Andreas'}}>{children}</UserContext.Provider>
  const { result } = renderHook(() => useUser(), { wrapper })
  
  expect(result.current.username).toEqual('Andreas')
})
