const express = require('express')
const data = require('./private/api-keys.json');
console.log(data);

const { allowedNodeEnvironmentFlags } = require('process')
const app = express()

app.use(express.static('public'));

app.get('/apikeys', function(req, res) {
    res.send(JSON.stringify(data));
});
 
app.listen(8766)