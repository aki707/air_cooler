import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/DevicesPage/Dashboard.jsx';
// import Navbar from './components/DevicesPage/Navbar.jsx';
import Loginspage from './components/Login/Loginspage.jsx';
import ProductPage from './components/ProductsPage/ProductPage.jsx';
import ProductTab from './components/ProductsPage/ProductTab';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Loginspage} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/pg" Component={ProductPage} />
      <Route path="/pt" Component={ProductTab} />



      {/* <Route path='/buy' Component={Buy}/> */}
    </Routes>

  );
}
export default App; 