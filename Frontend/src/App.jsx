// import React from 'react';
import Login from './components/Login/Login.jsx';
import './App.css';
import Signup from './components/Signup/Signup.jsx';
import { Routes,Route} from 'react-router-dom';
import Mydevices from './components/DevicesPage/Mydevices.jsx';
import Readings from './components/DevicesPage/Readings.jsx';
import Devicepage from './components/DevicesPage/Devicepage.jsx';
import Shadui from './components/DevicesPage/Shadui.jsx';
import Loginsui from './components/Login/Loginsui.jsx';

function App() {
  return (
    <>
          <Routes>
      <Route path="/Shadui" element={<Shadui />} />
          <Route path="/" element={<Loginsui />} />
         </Routes>
        {/* <Shadui /> */}
        {/* <Loginsui/> */}
        </>
  )
}
export default App; 