import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./Page/Home/home";
import About from "./Page/About/About";
import Project from "./Page/Project/Project";
import Contact from "./Page/Contact/Contact";
import Notfound from "./Page/Notfound/NotFound";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />

        <Route path="*" element={<Notfound/>} />
      </Routes>
    </Router>
  );
}

export default App;
