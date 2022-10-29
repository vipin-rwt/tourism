import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Product from './routes/Product';
import Services from './routes/Services';
import SignUp from './routes/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route  path='/products' element={<Product/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/sign-up' element={<SignUp/>} />
        
        </Routes>
        <Footer />
   

    </>
  );
}

export default App;
