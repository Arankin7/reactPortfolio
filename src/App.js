// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { Button } from 'react-bootstrap/Button';
// import { Modal } from 'react-bootstrap/Modal';


// import Components 
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <main>
        <Header />
          <Nav />
          <About />
          <Project />
          <Contact></Contact>
        <Footer />
      </main>
    </div>
  );
}

export default App;
