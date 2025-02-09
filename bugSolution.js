const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      // Send an appropriate error response to the client
      res.status(500).send('Internal Server Error');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});