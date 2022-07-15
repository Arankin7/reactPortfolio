// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import Components 
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
// import Navigation from './components/Nav';
// import Contact from './components/Contact';

function App() {

  return (
    <div>
      <main>
        <Header />
          {/* <Navigation /> */}
          <About />
          <Project />
        <Footer />
      </main>
    </div>
  );
}

export default App;