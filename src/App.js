import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home'
// import About from './components/About'
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router/>
    </BrowserRouter>
  );
}

export default App;
