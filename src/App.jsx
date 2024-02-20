import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home Page/Home';
//import Navbar from './Components/Common/Navbar';
import About from './Components/About Page/About';
import Contact from './Components/Contact Page/Contact';
import Solutions from './Components/Solutions Page/Solutions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
