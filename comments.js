// Create web server
// Run: node comments.js
// Use: http://localhost:3000/
// Use: http://localhost:3000/comments
// Use: http://localhost:3000/comments/1

var express = require('express');
var app = express();

var comments = [
    { name: 'John', text: 'Hello' },
    { name: 'Mary', text: 'Hi' },
    { name: 'Bob', text: 'Hey' }
];

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/comments', function (req, res) {
    res.json(comments);
});

app.get('/comments/:id', function (req, res) {
    var id = req.params.id;
    res.json(comments[id]);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});