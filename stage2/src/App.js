import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
      <Route exact path="/" component={HomeComponent}/>
      <Route  path="/QuizComponent" component={QuizComponent}></Route>
      <Route  path="/ResultComponent" component={ResultComponent}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;