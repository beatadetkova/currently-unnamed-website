import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Apply from './components/Apply/Apply.js';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router basename={process.env.BASE_NAME}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
