import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Highlights from './components/Highlights';
import Colors from './components/Color';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Footer />
    </div>
  );
};

export default App;
