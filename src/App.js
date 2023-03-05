import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import React, { Component } from 'react'
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';


const App=()=> {
  return (
    <>
    {/* it allow all the content inside to use the noteState (ie props) materials */}
    <NoteState> 
       <Router>
        <Navbar/>
        <Alert/>

        <div className="container">
          <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route exact path='/about' element={ <About />} />
        </Routes>
        </div>
        
      </Router>
    </NoteState>
    </>
  );
}

export default App;
