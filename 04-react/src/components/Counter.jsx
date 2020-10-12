import React, { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Nummeret er: 
      <span id="count"> {count}</span>
      <br />
      <button data-test-id="button-subtract" onClick={() => setCount(count - 1)}>-</button>
      <button data-test-id="button-add" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
