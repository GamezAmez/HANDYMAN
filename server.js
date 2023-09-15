const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;

// Use the cors middleware to allow cross-origin requests
app.use(cors());

app.get('/getExcelData', async (req, res) => {
  try {
    //Google Drive Excel file URL
    const googleDriveExcelURL = 'https://docs.google.com/spreadsheets/d/1ZPi1E2W5e5zJGC3b80sDYjNzziKlG_0n/edit?usp=sharing&ouid=111000085508897480562&rtpof=true&sd=true';
    const response = await axios.get(googleDriveExcelURL);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Excel data:', error);
    res.status(500).send('Error fetching Excel data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
