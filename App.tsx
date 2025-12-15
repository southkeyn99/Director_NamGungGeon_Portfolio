import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Showreel from './components/Showreel';
import Filmography from './components/Filmography';
import Stills from './components/Stills';
import Contact from './components/Contact';

// Home Page Composite Component
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Showreel />
      <div className="py-12 bg-cinematic-black text-center">
          <p className="text-neutral-500 text-sm tracking-widest uppercase mb-8">Selected Works Preview</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
               <img src="https://picsum.photos/600/600?random=50" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Work 1"/>
               <img src="https://picsum.photos/600/600?random=51" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Work 2"/>
               <img src="https://picsum.photos/600/600?random=52" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Work 3"/>
               <img src="https://picsum.photos/600/600?random=53" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Work 4"/>
          </div>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-cinematic-black min-h-screen text-white font-sans selection:bg-cinematic-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Directing Works */}
            <Route path="/film" element={<Filmography title="DIRECTING" category="directing" />} />
            
            {/* Cinematography Works */}
            <Route path="/cinematography" element={<Filmography title="CINEMATOGRAPHY" category="cinematography" />} />
            
            {/* Other Staff Works */}
            <Route path="/staff" element={<Filmography title="STAFF WORKS" category="staff" />} />
            
            <Route path="/stills" element={<Stills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;