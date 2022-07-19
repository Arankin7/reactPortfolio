// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// import Components 
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Home from './components/Home';
import Resume from './components/Resume';
// import Navigation from './components/Nav';
// import Contact from './components/Contact';

function App() {

  const [currentCategory, setCurrentCategory] = useState(0);

  const [projectSelected, setProjectSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <main>
        <Header
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
         />
         {/* Messy, but I got it to work */}

         {/* Will display home if nothing else is selected */}
         {!projectSelected && !aboutSelected && !resumeSelected ? (
          <>
          <Home />
          </>
         ) : (
          <div></div>
         )}

         {/* Displays project if projectSelected is true */}
        {projectSelected ? (
            <>
            <Project />            
            </>
          )   :  (
            <div />
          )}

        {/* displays About if  aboutSelected is true */}
        {aboutSelected ? (
            <>
            <About currentCategory={currentCategory} />
            </>
          ) : (
            <div />
          )}

          {resumeSelected ? (
            <>
            <Resume />
            </>
          ) : (
            <div />
          )}

        <Footer />
      </main>
    </div>
  );
}

export default App;