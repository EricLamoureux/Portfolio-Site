// MainRouter.jsx
// File Name: MainRouter.jsx
// Student Name: Eric Lamoureux
// StudentID: 301013898
// Date: September 29, 2024

import { Route, Routes } from 'react-router-dom';
import Home from './src/components/Home';
import Layout from './src/components/Layout';
import About from './src/components/About';
import Projects from './src/components/Projects';
import Services from './src/components/Services';
import Contact from './src/components/Contact';

const MainRouter = () => {
  return (
    <div>
      {/* Layout and Routes Section */}
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
