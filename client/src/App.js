import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
        <Switch> 
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="*" >
          <NotFound/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
