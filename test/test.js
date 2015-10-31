require('should');
var index = require("../index.js");

describe('getImageList()', function(){
	it('should be an array',function(){
		index.getImageList().should.be.an.instanceof(Array);
	});
});
