import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return <>
        <Header/>
        <Hero/>
        <Service/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
    </>
}

export default App;
