// import logo from './logo.svg';
import './App.css';
import React from 'react';


// import Components 
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';

function App() {
  return (
    <div>
      <main>
        <Header />
          <Nav />
          <About />
          <Project />
        <Footer />
      </main>
    </div>
  );
}

export default App;
