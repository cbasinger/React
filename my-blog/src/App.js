import React from 'react';
import logo from './logo.svg';


import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
const favicons = require('favicons'),
src='./public/favicon.ico';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <Content/>
        </header>
        <Footer/>
    </div>
  );
}
/*  header. js Does the same thing as function above to render HTML: */

export default App;
