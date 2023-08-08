//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './cpages/Home';
import Courses from './cpages/Courses';
import About from './cpages/About';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Home />}></Route>
    <Route path="/about" exact element={<About />}></Route>
    <Route path="/courses" exact element={<Courses />}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
