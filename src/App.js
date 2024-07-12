import './App.css';

import Navbar from'./components/Navbar';
import Footer from'./components/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Menu from './Pages/Menu';
import Quality from './Pages/Quality';
import Contact from './Pages/Contact'


function App() {
  return (
    <div className="App">
     

      <Navbar />
      <Routes>
      <Route path="*" element={null} />
        <Route   path='/' element={<Navigate to={'/Home'}  />} />
        <Route  path='/Home' element={<Home />} />
        <Route  path='Menu' element={<Menu />} />
        <Route  path='Quality' element={<Quality />} />
        <Route  path='Contact' element={<Contact />} />
      </Routes>
      
      <Footer/>
 
    
  
    </div>
  );
}

export default App;
