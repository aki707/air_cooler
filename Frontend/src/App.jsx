import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/DevicesPage/Dashboard.jsx';
//import Navbar from './components/DevicesPage/Navbar.jsx';
import SignUp from './components/Login/SignUp.jsx';
import SettingsLayout from './components/Forms/SettingsLayout.jsx';
import ProfileForm from './components/Forms/ProfileForm.jsx';
import SettingsProfilePage from './components/Forms/ProfileForm.jsx';
import DisplayForm from './components/Forms/display/DisplayForm'
import AccountForm from './components/Forms/account/AccountForm';
import AppearanceForm from './components/Forms/appearance/AppearanceForm';
import NotificationsForm from './components/Forms/notifications/NotificationsForm';
import ProductPage from './components/ProductsPage/ProductPage.jsx';
import OrdersPage from './components/OrdersPage/OrdersPage';
// import { ThemeProvider } from './components/theme/ThemeProvider.jsx';
import Signin from './components/Login/Signin.jsx';
import ControlPage1 from './components/ControlPage/ControlPage1';


import WebSocketComponent from './components/webscoket/webSocketComponent';


import React from 'react'

//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './components/context/AuthContext.jsx'
import CartPage from './components/CartPage/CartPage';

import ControlPage from './components/ControlPage/ControlPage';
import ShoppingCart from './components/CartPage/ShoppingCart';
//import { ShoppingCart } from 'lucide-react';
function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AuthProvider>
    <Routes>
      <Route path="/" Component={CartPage} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/signin" Component={Signin} />
      <Route path="/dashboard" Component={Dashboard} />

  // Setting routing
    <Route path='/settings' Component={SettingsLayout}>
      <Route path='/settings/profile' Component={ProfileForm}/>
      <Route path='/settings/spp' Component={SettingsProfilePage}/>
      <Route path='/settings/display' Component={DisplayForm}/>
      <Route path='/settings/account' Component={AccountForm}/>
      <Route path='/settings/appearance' Component={AppearanceForm}/>
      <Route path='/settings/notifications' Component={NotificationsForm}/>
    </Route>




      
      <Route path="/pg" Component={ProductPage} />
      <Route path="/og" Component={OrdersPage} />
      <Route path="/cp" Component={ControlPage1} />
      <Route path="/ct" Component={ShoppingCart} />

      <Route path="/ws" Component={WebSocketComponent} />


      <Route path="/cp" Component={ControlPage} />
            {/* <Route path='/buy' Component={Buy}/> */}
    </Routes>
    </AuthProvider>
    // </ThemeProvider>

  );
}
export default App; 