/*
  File Name: About.jsx
  Student's Name: Eric Lamoureux
  StudentID: 301013898
  Date: September 29, 2024
*/

const About = () => {
  return (
    <div className="about-container">
      <img src="/images/Eric.png" alt="Logo" style={{ width: "150px", borderRadius: "50%" }} />
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hi, I'm Eric! I'm a passionate developer with expertise in game development, 3D Modelling, and Animation.
        <a href="/images/Eric_Lamoureux_Resume.pdf" download> Download My Resume</a> </p>
      </div>
    </div>
  );
};

export default About;
