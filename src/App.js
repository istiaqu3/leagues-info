
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Components/Home/Home';

import {Grid } from '@material-ui/core'

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
      <Router>
      <div>
       
       <Grid container spacing={3}>
        <Grid item xs={12} >
          <div id= "header">
            this is header
          </div>
        </Grid>
        </Grid>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
