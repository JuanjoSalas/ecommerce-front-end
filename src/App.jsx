import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <BrowserRouter>
    
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  
    </BrowserRouter>
  )
}

export default App
