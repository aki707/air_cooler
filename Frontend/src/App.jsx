// import React from 'react';
//import Login from './components/Login/Login.jsx';
import './App.css';
//import Signup from './components/Signup/Signup.jsx';
import { Routes,Route} from 'react-router-dom';
// import Mydevices from './components/DevicesPage/Devices/Mydevices.jsx';
// import Readings from './components/DevicesPage/Devices/Readings.jsx';
// import Devicepage from './components/DevicesPage/Devicepage.jsx';
import Dashboard from './components/DevicesPage/Dashboard.jsx';
import Navbar from './components/DevicesPage/Navbar.jsx';
import Loginspage from './components/Login/Loginspage.jsx';

function App() {
  return (
    <>
        <Navbar />
        <Dashboard />
          {/* <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Loginspage />} />
         </Routes> */}
        {/* <Shadui /> */}
        {/* <Loginsui/> */}
        </>
  )
}
export default App; 