const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can change this to whatever port you prefer

const visitFilePath = path.join(__dirname, 'visits.txt');

// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

// Ensure visits.txt exists, create it if it doesn't
fs.access(visitFilePath, fs.constants.F_OK, (err) => {
    if (err) {
        // File does not exist, create it with an initial value of 0
        fs.writeFile(visitFilePath, '0', 'utf8', (err) => {
            if (err) {
                console.error('Error creating visit file:', err);
            } else {
                console.log('Created visits.txt with initial count of 0');
            }
        });
    }
});

// Endpoint to count visits
app.get('/increment-visit', (req, res) => {
    fs.readFile(visitFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading visit file:', err);
            res.status(500).send('Error tracking visit');
            return;
        }

        // Parse the current visit count, or start at 0 if it's empty
        let visitCount = parseInt(data) || 0;

        // Increment the count
        visitCount += 1;

        // Write the updated count back to the file
        fs.writeFile(visitFilePath, visitCount.toString(), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to visit file:', err);
                res.status(500).send('Error tracking visit');
                return;
            }

            console.log(`Updated visit count: ${visitCount}`);
            res.send(`Visit count: ${visitCount}`);
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
