// Serices.jsx

const Services = () => {
    const services = [
      { title: "Game Development", img: "/images/Logo.png" },
      { title: "3D Modelling", img: "/images/Burger.png" },
      { title: "Animation", img: "/images/Animations.gif" },
    ];
  
    return (
      <div>
        <h1>Services I Offer</h1>
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.img} alt={service.title} style={{ height: "400px" }} />
            <h2>{service.title}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default Services;
  