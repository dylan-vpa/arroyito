import { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [distance, setDistance] = useState(0);
  const [waterDetected, setWaterDetected] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    let isFetching = false; // Flag to track ongoing fetch requests

    const fetchData = () => {
      if (isFetching) return; // Prevent multiple concurrent fetches

      isFetching = true;
      setIsLoading(true); // Set loading state

      fetch('/api/data')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 204) {
            console.log('No data available yet');
            return null; 
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          if (data) {
            setDistance(data.distance);
            setWaterDetected(data.waterDetected);
          }
          setIsLoading(false); // Clear loading state
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false); // Clear loading state on error
        })
        .finally(() => {
          isFetching = false; // Reset fetching flag
        });
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      {isLoading ? (
        <p>Loading data...</p> 
      ) : (
        <>
          <p>Distance: {distance}cm</p>
          <p>Water Detected: {waterDetected ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
};

export default DataDisplay;
