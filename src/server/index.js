const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express()
app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/sentiment-analysis', async function (req, res) {
    console.log(req.body.encodedText);
    
    const encodedText = req.body.encodedText;
    const apiresult = await axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${encodedText}`)
     console.log(apiresult.data.irony);
    const { irony, confidence, agreement } = apiresult.data
    res.json({
        irony,
        confidence,
        agreement
    });
})
