const express = require('express');
const PORT = 8000;
const app = express();
const morgan = require('morgan');
app.use(require('./routes.js'));
app.use(expression.json());

app.listen(PORT, () => {
  console.log('server listening on port ${PORT}');
});
