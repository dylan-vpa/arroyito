

import { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [distance, setDistance] = useState(0);
  const [waterDetected, setWaterDetected] = useState(false);

  useEffect(() => {
    fetch('/api/data')
     .then(response => response.json())
     .then(data => {
        setDistance(data.distance);
        setWaterDetected(data.waterDetected);
      })
     .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      <p>Distance: {distance}cm</p>
      <p>Water Detected: {waterDetected? 'Yes' : 'No'}</p>
    </div>
  );
};

export default DataDisplay;