import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Home } from "./components/pages/home/Home";
import { Nav } from "./components/nav/Nav";
import { Whatsapp } from "./components/whatsapp/Whatsapp";
import AboutUS from './components/pages/aboutUS/AboutUS';
import Products from './components/pages/products/Products';
import Blog from './components/pages/blog/Blog';
import Contact from './components/pages/contact/Contact';
import Post from './components/pages/blog/Post';


import './components/assets/scss/estilos.scss'


function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid padre">
      <div className="row hijo">
        {/* <Login /> */}
        <Nav />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <Whatsapp />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
