require('should');
var index = require("../index.js");

describe('getImageList()', function(){
	it('should be an array',function(){
		index.getImageList().should.be.an.instanceof(Array);
	});
	it('should\'nt be empty', function(){
		index.getImageList().length.should.not.equal(0);
	});
	it('should only contain images',function(){
		var images = index.getImageList();
		for(index in images){
			images[index].match(/\.(JPG|jpg|JPEG|jpeg|PNG|png|GIF|gif)/).should.not.equal(null);
		}
	});
});
