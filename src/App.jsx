import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home Page/Home';
//import Navbar from './Components/Common/Navbar';
import About from './Components/About Page/About';
import Contact from './Components/Contact Page/Contact';
import Services from './Components/Services Page/Services';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
