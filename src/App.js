//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled","success");
      document.title = 'TetxtUtils - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled","success");
      document.title = 'TetxtUtils - Light Mode';
    }
  }
  return (
    <>

{/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
{/* <Router> */}
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
  <div className = "container my-3">
  {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          
          </Route>
  </Switch> */}

{/* <About/> */}  
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}></TextForm>   
  </div>
  {/* </Router> */}



    </>
  );
}

export default App;
