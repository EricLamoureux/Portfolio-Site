/*
  File Name: Home.jsx
  Student's Name: Eric Lamoureux
  StudentID: 301013898
  Date: September 29, 2024
*/

import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Mission Statement: I am dedicated to creating impactful digital solutions through my skills in development and design.</p>
        <div className="button-container">
          <button><Link to="/about">About Me</Link></button>
          <button><Link to="/projects">Projects</Link></button>
          <button><Link to="/services">Services</Link></button>
          <button><Link to="/contact">Contact Me</Link></button>
        </div>
      </div>
    );
};

export default Home;
