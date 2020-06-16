const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there! Again');
});

app.listen(8080, () => {
  console.log('app listening to port 8080');
});
