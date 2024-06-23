import { useState, useEffect } from "react";
import { getServices } from '../api';
import { ServiceCard } from "../components";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServices();
        console.log(response);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching nav links:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
