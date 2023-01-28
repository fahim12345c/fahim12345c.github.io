const express = require('express')
const app = express();
const port = 8080;

app.use('/assets', express.static('assets'))

app.get('/', function (request, response) {
    response.sendFile('index.html', {root: __dirname})
})

app.listen(port, function () {
    console.log('Running.')
})