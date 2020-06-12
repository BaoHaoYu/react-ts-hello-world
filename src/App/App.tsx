import React from 'react'
import { hot } from 'react-hot-loader'
import logo from '../logo.svg'
import './App.scss'

function Main() {
  return (
    <div className={'App'}>
      <header className={'App__header'}>
        <img src={logo} className={'App__logo'} alt="logo" />
        <p>
          Edit <code>src/App/App.tsx</code> and save to reload.
        </p>
        <a
          className={'App__link'}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default hot(module)(Main)
