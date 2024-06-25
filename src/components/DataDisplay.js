import { useState, useEffect } from "react";

const DataDisplay = () => {
  const [distance, setDistance] = useState(0);
  const [waterDetected, setWaterDetected] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("/api/data")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDistance(data.distance);
          setWaterDetected(data.waterDetected);
        })
        .catch((error) => console.error(error));
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <figure>
        <img
          alt="hola"
          src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </figure>
      <h2>Datos de <span>desarrollo</span></h2>
      <p>Altura<span>:</span> {distance}cm</p>
      <p>Riesgo de desbordamiento<span>:</span> {waterDetected ? "Yes" : "No"}</p>
    </main>
  );
};

export default DataDisplay;
