import { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [distance, setDistance] = useState(0);
  const [waterDetected, setWaterDetected] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(console.log(response))
        .then(data => {
          setDistance(data.distance);
          setWaterDetected(data.waterDetected);
        })
        .catch(error => console.error(error));
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
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
