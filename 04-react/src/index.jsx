import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'

ReactDom.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => ReactDom.render(<App />, document.getElementById('root')))
}
