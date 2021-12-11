import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import Article from './components/pages/Article';
import Service from './components/pages/Service';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
      {/* NavBar Component */}
        <Navbar></Navbar>
        <Switch>
          {/* HomePage Component */}
          <Route exact path="/" component={HomePage}></Route>
          {/* Article Component */}
          <Route path="/articles" component={Article}></Route>
          {/* Service Component */}
          <Route path="/services" component={Service}></Route>
          {/* Sign Up Component */}
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
