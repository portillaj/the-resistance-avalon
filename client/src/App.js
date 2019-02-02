import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'

export default function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}
