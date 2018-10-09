import React, { Component } from 'react';

/* Components
================================================== */
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import CreditAgricole from './components/resume/missions/creditagricole';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

/* Data
================================================== */
import resumeData from './data/resumeData';


/* Css
================================================== */
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
