
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';

import { useState } from 'react';
import Alert from './Alert';
import React from "react";

// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {

  const [mode, SetMode] = useState("light");

  const toggleMode =()=>{
    if(mode==='dark'){
      SetMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("The Light Mode Activated", "success")

    }else{
      SetMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("The Dark Mode Activated", "success")
    }
  }

  const [alert, SetAlertMode] = useState(null);

const showAlert = (message , type) =>{
  SetAlertMode({
    msg : message,
    type: type
})
setTimeout(()=>{
  SetAlertMode(null)
},1500)
}


  return (   

    <div className="App">         
    <Navbar title="WEB Developer" menu='About Us' mode={mode} toggleMode={toggleMode} ></Navbar>
    <Alert alert={alert} /> 
    <div className='container'>   
    <TextForm heading='Entre the text to Analyze'  mode={mode} showAlert = {showAlert}/>   
   </div>
  
    </div>
          
  );
}

export default App;
