import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;