// Projects.jsx

const Projects = () => {
    const projectData = [
      { title: "Brick Breaker", description: "Description of Project 1", img: "/images/Brick.jpg" },
      { title: "Flappy Birb", description: "From scratch I made a clone of Flappy Bird", img: "/images/Flappy.jpg" },
      { title: "Project 3", description: "Description of Project 3", img: "/images/Logo.png" },
    ];
  
    return (
      <div>
        <h1>My Projects</h1>
        {projectData.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.img} alt={project.title} style={{ height: "400px" }} />            
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;
  