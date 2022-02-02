
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Testimonal from './components/Testimonal';
import Testing from './components/Testing';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState('null');


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert('null');
    }, 3000);
  }

  // const toggle_mode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     showAlert('Successfully Dark Mode', 'danger')
  //   }
  //   else {
  //     setMode('light')
  //     showAlert('Successfully Light Mode', 'success')
  //   }
  // }

  // const dynamicBackground = (e) => {
  //   const id = e.currentTarget.getAttribute("data-id");
  //   setBackground(id);
  // }
  return (
    <>

      <Navbar />
      {alert.message && <div className="alert alert-success" role="alert" >
        {alert.message}
      </div>}
      <Routes>
        <Route path="/" element={<Testing showAlert={showAlert} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonal" element={<Testimonal />} />
      </Routes>
    </>
  );
}

export default App;
