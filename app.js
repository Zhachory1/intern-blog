var express = require('express');
var argv = require('yargs').argv;
var app = express();

if (argv.dev) {
  app.use(express.static('build/unbundled'));
} else {
  app.use(express.static('build/bundled'));
}

var server = app.listen(argv.port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
});
