import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"}}>
      <Header />
      <Hero />
      <Story />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;