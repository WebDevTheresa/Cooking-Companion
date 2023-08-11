const express = require('express');
const PORT = 8000;
const app = express();
const morgan = require('morgan');
app.use(express.json());
app.use(require('./routes.js'));

app.listen(PORT, () => {
  console.log('server listening on port ${PORT}');
});
