import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/DevicesPage/Dashboard.jsx';
// import Navbar from './components/DevicesPage/Navbar.jsx';
import Loginspage from './components/Login/Loginspage.jsx';
import SettingsLayout from './components/Forms/SettingsLayout.jsx';
import ProfileForm from './components/Forms/ProfileForm.jsx';
import SettingsProfilePage from './components/Forms/ProfileForm.jsx';
import DisplayForm from './components/Forms/display/DisplayForm'
import AccountForm from './components/Forms/account/AccountForm';
import AppearanceForm from './components/Forms/appearance/AppearanceForm';
import NotificationsForm from './components/Forms/notifications/NotificationsForm';
import ProductPage from './components/ProductsPage/ProductPage.jsx';
import ProductTab from './components/ProductsPage/ProductTab';
import ProductCard from './components/ProductsPage/ProductCard';
// import { ThemeProvider } from './components/theme/ThemeProvider.jsx';

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Routes>
      <Route path="/" Component={Loginspage} />
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
      {/* <Route path="/pt" Component={ProductTab} />
      <Route path="/pc" Component={ProductCard} /> */}



      {/* <Route path='/buy' Component={Buy}/> */}
    </Routes>
    // </ThemeProvider>

  );
}
export default App; 