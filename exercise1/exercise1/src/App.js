import React from 'react';
import logo from './logo.svg';


import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


import './App.css';

function App(){
    return (
    <div className="App">
        <header className ="App-header">
            <img src = {logo} className = "App-logo" alt="logo" />
            <Header/>
            <Content text= 'This is the content for this exercise'/>
            <Footer/>
        </header>
    </div> 
    );
}

export default App; 