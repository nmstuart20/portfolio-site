const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/golf-rankings', async (req, res) => {
  const apiUrl = 'https://api.sportradar.com/golf/trial/v3/en/players/wgr/2024/rankings.json?api_key=iS30RLvmdw3dZ5rPWbbauadvNh7D3WH74J3op6CS';
  try {
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        "Access-Control-Request-Headers": "Content-Type"
        // Include other headers as required by the external API
      }
    });
    const data = await apiResponse.json();
    res.json(data); // Send the API response back to the frontend
  } catch (error) {
    console.error('Error fetching golf rankings:', error);
    res.status(500).send('Error fetching data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));