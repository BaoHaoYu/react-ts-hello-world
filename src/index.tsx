import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

function renderApp() {
  ReactDOM.render(<App />, document.querySelector('#root'))
}

renderApp()
