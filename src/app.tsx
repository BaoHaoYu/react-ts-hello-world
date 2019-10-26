import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './main'

function renderApp() {
  ReactDOM.render(<Main />, document.querySelector('#react'))
}

renderApp()
