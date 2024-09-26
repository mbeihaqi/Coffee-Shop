import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import InstantCoffee from './components/InstantCoffee';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    if (window.location.hash === '#about') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}, []);
useEffect(() => {
  if (window.location.hash === '#coffee') {
      const coffeeSection = document.getElementById('coffee');
      if (coffeeSection) {
          coffeeSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
}, []);
  return (
    <div className='bg-white overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <InstantCoffee/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
