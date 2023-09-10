import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import NotFound from './NotFound'
import SignUp from './SignUp'
import SignIn from './SignIn'

function App() {

  return (

    <main>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/signin'>
          <SignIn/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </main>
    
  )

}
export default App
