// Services.jsx
// File Name: Services.jsx
// Student Name: Eric Lamoureux
// StudentID: 301013898
// Date: September 29, 2024

const Services = () => {
  const services = [
    { title: "Game Development", description: "As a Unity game developer, I specialize in creating immersive, high-quality 2D and 3D games from scratch, offering services from concept development to polished, playable projects. Whether you're looking for innovative gameplay mechanics or a complete game design, I deliver solutions that bring your vision to life", img: "/images/Unity.png" },
    { title: "Animation", description: "I offer professional 3D animation and rigging services, bringing characters and environments to life with fluid, dynamic movement.", img: "/images/Animations.gif" },
    { title: "3D Modelling", description: "As a skilled 3D modeler, I create detailed, optimized models with high-quality textures to suit any style or project.", img: "/images/3DArt.png" },
  ];

  return (
    <div>
      {/* Services Display Section */}
      <h1>Services I Offer</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <img src={service.img} alt={service.title} style={{ height: "400px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
