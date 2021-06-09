
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Components/Home/Home';

import {Grid } from '@material-ui/core'
import Details from './Components/Details/Details';

function App() {
  return (
    <div style={{backgroundColor:"#13294a"}}>
      <Router>
      <div>
       
       <Grid container spacing={3}>
        <Grid item xs={12} >
          <div id= "header">
            <h1>League Infos</h1>
          </div>
        </Grid>
        </Grid>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:idLeague">
            <Details></Details>
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
