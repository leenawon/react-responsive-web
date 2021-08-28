import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import Article from './components/pages/Article';
import Service from './components/pages/Service';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* NavBar Component */}
        <Navbar></Navbar>
        <Switch>
          {/* HomePage Component */}
          <Route exact path="/" component={HomePage}></Route>
          {/* Article Component */}
          <Route exact path="/articles" component={Article}></Route>
          {/* Service Component */}
          <Route exact path="/services" component={Service}></Route>
          {/* Sign Up Component */}
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
