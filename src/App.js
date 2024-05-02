
import './App.css';
import './Responsive.css';
import Home_page from './Project3 Component/Home_page';
import { useContext, useEffect, useState } from 'react';
import PreLoader from './Project3 Component/PreLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Project3 Component/View';
import Navbar from './Project3 Component/Navbar';
import Activity from './Project3 Component/Activity';





function App() {
  
  return (
      
    <BrowserRouter>
        <PreLoader/>
        <Routes>
           <Route path='/' element={<Home_page/>}/>
           <Route path='/View_page' element={<View/>}/>
           <Route path="/Activity" element={<Activity/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
