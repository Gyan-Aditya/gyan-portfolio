import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import CustomCursor from './components/CustomCursor';
import About from './sections/About';
import Projects from './sections/Projects';
import Educations from './sections/Educations';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    // <div className='container mx-auto max-w-7xl'>
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Projects />
    //   <Educations />
    //   <Testimonial />
    //   <Contact />
    //   <Footer/>
    // </div>
    <div className='container mx-auto max-w-7xl relative'>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Educations />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
