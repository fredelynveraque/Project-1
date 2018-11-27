
var express = require('express');
var app = express();
var v = require('./package.json');
var port = v.serve.port || 3000;
var assets = v && v.serve && v.serve.assets ? v.serve.assets : "public/assets"
var html = v && v.serve && v.serve.html ? v.serve.html : "./prototypes"

console.log(v.name + ' ' + v.version)
console.log("Serving at http://localhost:" + port);
console.log("Press Ctrl + C to exit")

app.use("/", express.static(html));
app.use("/assets", express.static(assets));
app.listen(process.env.PORT || port);
