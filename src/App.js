// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// import Components 
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
// import Navigation from './components/Nav';
// import Contact from './components/Contact';

function App() {

  const [currentCategory, setCurrentCategory] = useState(0);

  const [projectSelected, setProjectSelected] =useState(false);

  return (
    <div>
      <main>
        <Header
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
         />
          {/* <Navigation /> */}
          {!projectSelected ? (
            <>
            <About currentCategory={currentCategory} />
            </>
          ) : (
            <Project />
          )}
        <Footer />
      </main>
    </div>
  );
}

export default App;