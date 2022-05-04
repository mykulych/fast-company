import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './components/layout/main'
import Login from './components/layout/login'
import Header from './components/header'
import Users from './components/layout/users'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Main} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users/:userId?'} component={Users} />
      </Switch>
    </>
  )
}

export default App
