import React from 'react';
import './App.css';
import Logo from './Components/Logo/logo'
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Skills from './Components/Skills/skills'
import Projects from './Components/Projects'
import ContactUs from './Components/ContactUs'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Logo />
    <Navbar />

 <Routes>
 <Route exact path="/" element={<HeroSection />} />
 <Route exact path="/education" element={<Education />} />
 <Route exact path="/experience" element={<Experience />} />
 <Route exact path="/skills" element={<Skills />} />
 <Route exact path="/project" element={<Projects />} />
 <Route exact path="/contactUs" element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
<Logo/>
    <Navbar/>
    <HeroSection/>
    <Education/>
    <Experience/>
    <Skills/>

    <Projects/>
    <ContactUs/> */