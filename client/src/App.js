import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import NotFound from './NotFound'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { MyContext } from "./MyContext";

function App() {

  const {name} = useContext(MyContext)

  return (

    <main>
           <h1 style={{paddingTop: '5rem'}}>{name}</h1>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signin'>
          <SignIn/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </main>
    
  )

}
export default App
