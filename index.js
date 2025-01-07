const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('You are the best');
});

app.get('/name', (req, res) => {
    res.send("<h1>Nilasi</h1>");
    
  });

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
