const express = require('express');
const ps4Router = express.Router();
const request = require('request')

ps4Router.get('/', (req, res) => {
    console.log(`ps4.js:${req.method} request for ${req.url}`);
    res.send('This is the ps4 route');
});

// 1.b Promises
ps4Router.get('/promise/:query', async (req, res, next) => {
   const options = {
       url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${req.params.query}`,
       json: true
   };
   const promise = new Promise((resolve, reject) => {
       request(options, (error, response, body) => {
           if (error) {
               reject(error);
           } else {
               resolve(body);
           }
       });
   });

   promise.then((data) => {
       const info = data.data[0];
       const results = `${info['id']}\n${info['name']}\n${info['card_images'][0]['image_url']}`;
       console.log(results);
       res.send(data);
   }).catch((error) => {
       next(error)
   })
});

// 1.c async/await
ps4Router.get('/async', async(req, res) => {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Pot Of Greed');
        const json = await response.json();
        const info = json.data[0]
        const results = `${info['id']}\n${info['name']}\n${info['card_images'][0]['image_url']}`;
        console.log(results);
        res.send(json);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// 1.d callback
ps4Router.post('/callback', (req, res) => {
    const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Pot Of Greed';
    request(apiUrl, (error, response, body) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error');
            return;
        }
        if (response.statusCode !== 200) {
            res.status(404).send('Not found');
            return;
        }
        const data = JSON.parse(body);
        const info = data.data[0]
        const results = `${info['id']}\n${info['name']}\n${info['card_images'][0]['image_url']}`;
        console.log(results);
        res.send(data);
    });
});

ps4Router.post('/search', (req, res) => {
    const searchQuery = req.body.searchString; // get the search input from the form
    res.redirect(`/promise/${searchQuery}`); // redirect to search results route with the search query as a parameter
});
module.exports = ps4Router
