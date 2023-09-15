const proxyUrl = 'http://localhost:3000/getExcelData';

fetch(proxyUrl)
  .then((response) => response.json())
  .then((data) => {
    // Process the Excel data as needed
    console.log(data);
  })
  .catch((error) => console.error('Error:', error));







