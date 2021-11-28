const fs = require(`fs`);
const path = require(`path`);
const express = require(`express`);
const app = express();
const help = require(`./src/modules/routes/help`);


app.use(`/help`,help);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, './src/static/index.html')).pipe(res);
});

app.get('/david', (req, res) => {
    fs.createReadStream(path.join(__dirname, './src/static/david.html')).pipe(res);
});
