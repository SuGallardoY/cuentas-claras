import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header'; 
import Contacto from './components/contacto/contacto'
import AboutPage from './components/acercade/acercade'; 
import './App.css';  

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
