var fs = require('fs');
var express = require('express');
var app = express();

// app.register('.html', require('ejs'));

function getImageList () {
	var images = [];
	fs.readdir(__dirname, function(err, files){
		for(var index in files){
			if (files[index].match(/\.(JPG|jpg|JPEG|jpeg|PNG|png|GIF|gif)/)) {
				images.push(files[index]);
			}
		}

		console.log(images);

	});

	return images;

}

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/gallery.html");
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});