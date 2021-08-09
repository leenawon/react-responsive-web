import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
