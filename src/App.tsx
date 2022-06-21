import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Offer } from './components/offer/offer';
import { Realizations } from './components/realizations/realizations';
import { Contact } from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <h1>Hello Ekoinstal</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/o-nas' element={<About />} />
        <Route path='/oferta' element={<Offer />} />
        <Route path='/realizacje' element={<Realizations />} />
        <Route path='/kontakt' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
