'use strict'
//express server
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function (req, res){
  res.send('\
    <!DOCTYPE html>\
    <html>\
        <head>\
           <title> MEAN TODO APP </title>\
           <base href="/">\
        </head>\
        <body>\
          <div ui-view></div>\
          <script src="bundle.js"></script>\
        </body>\
    </html>\
           ');
});

app.listen(PORT, function(){
  console.log(`Server running on ${PORT}`);
});
