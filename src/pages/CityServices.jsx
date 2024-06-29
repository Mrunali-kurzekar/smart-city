import React, { useEffect, useState } from 'react';
import { getCityServices } from '../services/api';

function CityServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCityServices();
      setServices(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>City Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityServices;
