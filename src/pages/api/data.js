const dataHandler = async (req, res) => {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { distance, waterDetected } = req.body;

  if (typeof distance!== 'number' || typeof waterDetected!== 'boolean') {
    return res.status(400).json({ error: 'Invalid data type' });
  }

  console.log(`Received data: distance=${distance}cm, waterDetected=${waterDetected}`);

  return res.status(200).json({ message: 'Datos recibidos correctamente' });
};

export default dataHandler;