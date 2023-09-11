import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import NotFound from './NotFound'
import SignIn from './SignIn'
import SignUp from './SignUp'
import MainPage from './MainPage'
import { MyContext } from "./MyContext";

function App() {

  const {user} = useContext(MyContext)

  return (
    <>
      {user === null ? 
        <main>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/signin'>
              <SignIn/>
            </Route>
            <Route exact path='/signup'>
              <SignUp/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </main>
        :
        <main>
          <Switch>
            <Route exact path='/mainpage'>
              <MainPage/>
            </Route>
          </Switch>
        </main>
      }
    </>
  )
}
export default App
