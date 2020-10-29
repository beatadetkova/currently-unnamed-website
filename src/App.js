import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Apply from './components/Apply/Apply.js';
import NavBar from './components/NavBar/NavBar';

const basePath = process.env.BASE_PATH;

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={basePath + '/'} component={Home} />
          <Route exact path={basePath + '/apply'} component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
