import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import Contact from './contact/Contact';
import Aboutus from './about/Aboutus';


function App() {
  return (
    <>
    {/*<Home/>
    <Course/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
