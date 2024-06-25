const dataHandler = async (req, res) => {
  const allowedMethods = ['POST', 'GET'];

  if (!allowedMethods.includes(req.method)) {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Storage for latest data
  let latestData = {
    distance: null,
    waterDetected: null
  };

  if (req.method === 'POST') {
    const { distance, waterDetected } = req.body;

    if (typeof distance !== 'number' || typeof waterDetected !== 'boolean') {
      return res.status(400).json({ error: 'Invalid data type' });
    }

    console.log(`Received data: distance=${distance}cm, waterDetected=${waterDetected}`);

    // Update the latest data
    latestData = { distance, waterDetected };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Datos recibidos correctamente' });
  } else if (req.method === 'GET') {
    // Return the latest data if available
    if (latestData.distance !== null && latestData.waterDetected !== null) {
      res.setHeader('Content-Type', 'application/json'); 
      return res.status(200).json(latestData);
    } else {
      res.setHeader('Content-Type', 'application/json'); 
      return res.status(204).json({ message: 'No data available yet' }); 
    }
  }
};

export default dataHandler;
