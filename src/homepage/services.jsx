import { Link } from "react-router-dom";
import amico from "../assets/amico.png";
import pana from "../assets/pana.png";
import rafiki from "../assets/rafiki.png";

const services = [
  {
    title: "SCRAP SELLING",
    image: amico,
    link: "/scrap-selling",
  },
  {
    title: "BUSINESS",
    image: pana,
    link: "/business",
  },
  {
    title: "ECO LIFE",
    image: rafiki,
    link: "/eco-life",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#1C211B] py-20 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#26B33B] rounded-2xl p-6 flex flex-col items-center text-center 
              shadow-lg transform transition-all duration-300 ease-in-out 
              hover:scale-105 hover:shadow-lg hover:shadow-[#26b33bc0]"
          >
            <h3 className="text-white text-lg font-bold mb-4">
              {service.title}
            </h3>
            <img
              src={service.image}
              alt={service.title}
              className="w-55 h-45 mb-4"
            />

            <Link to={service.link}>
              <button
                className="bg-white text-[#26B33B] px-6 py-2 rounded-full font-normal
                  hover:cursor-pointer"
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
