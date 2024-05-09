
// Make a GET request to the /data endpoint
fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Display the results
        console.log(data);
        // You can manipulate the data and display it on the webpage as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Add a title
const title = document.createElement('h1');
title.textContent = 'Our Repo Statistics';
document.body.appendChild(title);
