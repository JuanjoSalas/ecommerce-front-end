import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Products from './components/Products/Products.jsx';
import { ProductProvider } from "./context/ProductContext/ProductState.jsx";
import Login from "./components/Login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { UserProvider } from './context/UserContext/UserState.jsx';

function App() {

  return (
    <UserProvider>
    <ProductProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<><Home/><Products/></>}/>
    <Route path="/user/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ProductProvider>
    </UserProvider>
  )
}

export default App
