// Projects.jsx
// File Name: Projects.jsx
// Student Name: Eric Lamoureux
// StudentID: 301013898
// Date: September 29, 2024

const Projects = () => {
  const projectData = [
    { title: "Brick Breaker", description: "I recreated the classic game Brick Breaker from scratch in Unity, building everything from the core mechanics to the UI. I implemented features like paddle movement, ball physics, and dynamic brick-breaking interactions, all while ensuring smooth gameplay and collision detection. This project was a great way to refine my skills in Unity's physics system and game loop design.", img: "/images/Brick.jpg" },
    { title: "Flappy Birb", description: "I recreated the game Flappy Bird from scratch in Unity, focusing on replicating the challenging yet addictive mechanics. I implemented the core gameplay features, including the bird's flapping physics, pipe obstacle generation, and collision detection. This project helped me enhance my understanding of Unity's 2D physics and game object spawning systems.", img: "/images/Flappy.jpg" },
    { title: "Alien Exterminator", description: "I worked in a group to design a top-down 3D shooter where the player controls a space marine battling rooms of alien enemies, drawing inspiration from Doom. We collaborated on developing key mechanics like combat, enemy AI, and level design, ensuring the game felt action-packed and immersive.", img: "/images/Alien.png" },
  ];

  return (
    <div>
      {/* Projects Display Section */}
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.img} alt={project.title} style={{ height: "400px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
