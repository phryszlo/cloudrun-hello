const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hey there, ${name}!`);
});
// commentcommentcomment
app.get('/smurf', (req, res) => {
  res.send(`Welcome to the secret Smurf route`);
})

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});