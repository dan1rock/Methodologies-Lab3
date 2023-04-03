const express = require('express');

const app = express();
const port = 8080; 

app.get('/', (req, res) => res.json(`I'm alive!`))

app.listen(port, (err) => {
    if(err) throw new Error(`Error listening -> ${err}`);
    console.log(`Server listening at http://localhost:${port}`);
})