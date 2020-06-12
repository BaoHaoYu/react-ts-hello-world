import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/App/App'
import './index.scss'

function renderApp() {
  ReactDOM.render(<App />, document.querySelector('#root'))
}

renderApp()
