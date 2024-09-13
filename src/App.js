import './App.css';
import Navbar from './components/Navbar';
import TextFormat from './components/TextFormat';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react';  

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode} AboutText="About Us" />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About  />} />
            <Route exact path="/" element={<TextFormat showAlert={showAlert} heading="Enter the Text to Analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
