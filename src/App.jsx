import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <BrowserRouter>
    
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/users/login" element={<Login/>}/>
    </Routes>
    <Footer/>
  
    </BrowserRouter>
  )
}

export default App
