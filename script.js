const searchKeyword = 'your search keyword'; // Replace with your search query

// Function to perform a web search
async function performWebSearch(query) {
    try {
        // Construct the search URL (Google search in this example)
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        // Send an HTTP GET request to the search engine
        const response = await fetch(searchUrl);

        if (response.ok) {
            // Parse the HTML content of the response
            const html = await response.text();

            // Use a DOM parser to extract search results
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract search results (example: extracting titles and URLs)
            const searchResults = doc.querySelectorAll('.tF2Cxc'); // Modify selector based on the search engine's structure

            // Process and display the results
            searchResults.forEach((result, index) => {
                const title = result.querySelector('h3').textContent;
                const url = result.querySelector('a').getAttribute('href');

                console.log(`Result ${index + 1}:`);
                console.log(`Title: ${title}`);
                console.log(`URL: ${url}`);
                console.log('---');
            });
        } else {
            console.error('Failed to retrieve search results.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the function to perform the web search
performWebSearch(searchKeyword);




const handymanData = [
    { service: "Plumbing", location: "Ekosodin", name: "John Doe", phoneNumber: "123-456-7890" },
    { service: "Electrical", location: "Ekosodin", name: "Jane Smith", phoneNumber: "987-654-3210" },
    { service: "Carpentry", location: "Ekosodin", name: "Bob Johnson", phoneNumber: "555-123-4567" },
    { service: "Painting", location: "Ekosodin", name: "Alice Brown", phoneNumber: "111-222-3333" },
    { service: "Plumbing", location: "Osasogie", name: "John Doe", phoneNumber: "123-456-7890" },
    { service: "Electrical", location: "Osasogie", name: "Jane Smith", phoneNumber: "987-654-3210" },
    { service: "Carpentry", location: "Osasogie", name: "Bob Johnson", phoneNumber: "555-123-4567" },
    { service: "Painting", location: "Osasogie", name: "Alice Brown", phoneNumber: "111-222-3333" },
    { service: "Plumbing", location: "BDPA", name: "John Doe", phoneNumber: "123-456-7890" },
    { service: "Electrical", location: "BDPA", name: "Jane Smith", phoneNumber: "987-654-3210" },
    { service: "Carpentry", location: "BDPA", name: "Bob Johnson", phoneNumber: "555-123-4567" },
    { service: "Painting", location: "BDPA", name: "Alice Brown", phoneNumber: "111-222-3333" },
    { service: "Plumbing", location: "Main Campus", name: "John Doe", phoneNumber: "123-456-7890" },
    { service: "Electrical", location: "Main Campus", name: "Jane Smith", phoneNumber: "987-654-3210" },
    { service: "Carpentry", location: "Main Campus", name: "Bob Johnson", phoneNumber: "555-123-4567" },
    { service: "Painting", location: "Main Campus", name: "Alice Brown", phoneNumber: "111-222-3333" },

];

// Function to search for handymen
function searchHandymen() {
    const selectedService = document.getElementById('service').value;
    const selectedLocation = document.getElementById('location').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredHandymen = handymanData.filter(handymen => {
        return handymen.service === selectedService && handymen.location === selectedLocation;
    });

    if (filteredHandymen.length === 0) {
        resultsContainer.innerHTML = 'No handymen found for the selected criteria.';
    } else {
        filteredHandymen.forEach(handymen => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `
                <strong>Service:</strong> ${handymen.service}<br>
                <strong>Location:</strong> ${handymen.location}<br>
                <strong>Name:</strong> ${handymen.name}<br>
                <strong>Phone Number:</strong> ${handymen.phoneNumber}<br><br>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }
}
