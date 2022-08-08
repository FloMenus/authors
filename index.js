const express = require('express');
const app = express();
const port = 8000;
const authors = require ('./routes/authors');


app.use('/authors', authors);
app.get('/', (req, res) => res.send('Authors API'));

app.listen(port, () => console.log(`Authors API listening on port ${port}`));

module.exports = app;