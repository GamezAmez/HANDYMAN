 // Replace with your Google Apps Script URL
 const scriptURL = 'https://script.google.com/macros/s/AKfycbxwo--PTDbp-i7l0spOr1Om9UeWC-6qivPYLT_W3xvvvoLqkZhnBrY-3xDTK-S0TPEfUA/exec';

 // Function to handle the JSONP response
 function processData(data) {
     const resultsContainer = document.getElementById('results');
     resultsContainer.innerHTML = '';

     if (data.length === 0) {
         resultsContainer.innerHTML = 'No handymen found for the selected criteria.';
     } else {
         data.forEach(entry => {
             const [service, location, name, phoneNumber] = entry;

             const resultElement = document.createElement('div');
             resultElement.innerHTML = `
                 <strong>Service:</strong> ${service}<br>
                 <strong>Location:</strong> ${location}<br>
                 <strong>Name:</strong> ${name}<br>
                 <strong>Phone Number:</strong> ${phoneNumber}<br><br>
             `;
             resultsContainer.appendChild(resultElement);
         });
     }
 }

 // Function to perform the JSONP request
 function fetchData() {
     const selectedService = document.getElementById('service').value;
     const selectedLocation = document.getElementById('location').value;
     const resultsContainer = document.getElementById('results');
     resultsContainer.innerHTML = '';

     const scriptElement = document.createElement('script');
     scriptElement.src = `${scriptURL}?callback=processData&service=${selectedService}&location=${selectedLocation}`;
     document.body.appendChild(scriptElement);
 }