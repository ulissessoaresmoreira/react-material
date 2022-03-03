import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom"



import About from './pages/About'
import Home from './pages/Home'
import Films from './pages/Films'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
