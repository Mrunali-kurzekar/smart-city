import React, { useEffect, useState } from 'react';
import { getRealTimeData } from '../services/api';

function RealTimeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getRealTimeData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Real-Time Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeData;
