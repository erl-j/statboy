var express = require('express');
var app = express();



// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(questions[req.query.question]);
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(host);

    console.log("Example app listening at http://%s:%s", host, port)
})

const questions = [{
    "id": 1,
    "q": "Height of mt. everest",
    "unit": "metres",
    "a": 8848,
    "s": "Andrew Waugh, 1856"
}, {
    "id": 2,
    "q": "Population of ukraine",
    "unit": "count, 2017 estimate",
    "a": 42418235,
    "s": "www.ukrstat.gov.ua"
}];