const express = require('express');
const ps4Router = require('./ps4');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`app.js:${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res, next) => {
    res.send('This is the home page. Go to /ps4 for more');
    next();
});

app.use('/ps4', ps4Router);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


