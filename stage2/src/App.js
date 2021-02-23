import React from 'react';
import QuizComponent from './components/QuizComponent';

import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
      <Route exact path="/" component={HomeComponent}/>
      <Route exact path="/HomeComponent" component={HomeComponent}/>
      <Route  path="/QuizComponent" component={QuizComponent}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;