import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Intro from './routes/Intro';
import Gallery from './routes/Gallery';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
