import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import About from './components/About';
import Gear from './components/Gear';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <About />
        <Gear />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
