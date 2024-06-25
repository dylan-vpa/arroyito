const dataHandler = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permite solicitudes desde cualquier origen (ajusta según tus necesidades)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  // Initialize or retrieve existing latestData outside the handler function
  let latestData = global.latestData || { distance: null, waterDetected: null }; // Default to null

  if (req.method === "POST") {
    const { distance, waterDetected } = req.body;

    if (typeof distance !== "number" || typeof waterDetected !== "boolean") {
      return res.status(400).json({ error: "Invalid data type" });
    }

    console.log(
      `Received data: distance=${distance}cm, waterDetected=${waterDetected}`
    );

    // Update global latestData
    global.latestData = { distance, waterDetected };

    return res.status(200).json({ message: "Datos recibidos correctamente" });
  } else if (req.method === "GET") {
    if (latestData.distance !== null && latestData.waterDetected !== null) {
      return res.status(200).json(latestData);
    } else {
      return res.status(204).json({ message: "No data available yet" });
    }
  }
};

export default dataHandler;
