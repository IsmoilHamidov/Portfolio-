
import './App.css';
import './Responsive.css';
import './PreLoader.css'
import './Animation_progress.css'
import PreLoader from './Project3 Component/PreLoader';
import { Routes, Route } from 'react-router-dom';
import View from './Project3 Component/View';
import React, {useState, useEffect} from 'react';
import HomePage from './Project3 Component/HomePage';




function App() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 1700)
  }, [])

  
  return (
    <>
      {/* { isLoading ?  <PreLoader/> :
        
        <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/View_page' element={<View/>}/>
        </Routes>
      } */}

        <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/View_page' element={<View/>}/>
        </Routes>
    </>
  );
}

export default App;
