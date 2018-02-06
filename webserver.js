var express = require('express');
var app = express();
var path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});
app.listen(3000, () => {
    console.log("http://localhost:3000");
})