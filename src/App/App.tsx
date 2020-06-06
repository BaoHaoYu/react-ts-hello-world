import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import { P2 } from '~/Page/P2/P2'
import './App.scss'

const LoadP1 = React.lazy(() => import('../Page/P1/P1'))

function Main() {
  return (
    <HashRouter>
      <div className={'App'}>
        <NavLink to="/p1">P1</NavLink>
        {'   '}
        <NavLink to="/p2">P2</NavLink>
      </div>

      <Route path="/p1">
        <React.Suspense fallback="">
          <LoadP1 />
        </React.Suspense>
      </Route>

      <Route path="/p2">
        <P2 />
      </Route>
    </HashRouter>
  )
}

export default hot(module)(Main)
