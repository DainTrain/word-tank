const express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')
const app = express()

app.use(express.static('public'));
 
app.listen(8766)