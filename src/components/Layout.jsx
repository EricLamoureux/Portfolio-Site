/*
  File Name: Layout.jsx
  Student's Name: Eric Lamoureux
  StudentID: 301013898
  Date: September 29, 2024
*/

// Layout for navigation
import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';

export default function Layout() {
  return (
    <>
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '20px' }} />
        <nav>
          <Link to="/">Home</Link> &nbsp;|&nbsp;
          <Link to="/about">About</Link> &nbsp;|&nbsp;
          <Link to="/projects">Projects</Link> &nbsp;|&nbsp;
          <Link to="/services">Services</Link> &nbsp;|&nbsp;
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <hr />
    </>
  );
}
