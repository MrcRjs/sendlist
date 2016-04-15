process.env.NODE_ENV = 'test';

var chai      = require('chai');
var should 		= require('chai').should();
var chaiHttp 	= require('chai-http');
var mongoose 	= require("mongoose");

chai.use(chaiHttp);

//var server = require('../server/app');


describe('foo bar', function(){
	var foo = 'bar';
	it("should be a string",function(){
		foo.should.be.a('string');
	});

	it("should equal bar",function () {
		foo.should.equal('bar');
		foo.should.have.length(3);
	});
});

describe('Bebidas', function() {
  	var	bebidas = { cafe: [ 'americano', 'cappuccino', 'expresso' ],
					jugo: [ 'arándano', 'naranja' ] };

	it("should have 3 different types of coffe", function(){
		bebidas.should.have.property('cafe').with.length(3);
	});

	it("should have naranja juice",function(){
		bebidas.should.have.property('jugo')
			.and.include('naranja');
	});

	/*it("should have peach tea",function(){
		bebidas.should.have.property('te')
			.and.include('durazno');
	});*/
});

/*describe('Inicio', function(){
  it('should return 200 response', function() {
  	chai.request("http://localhost:8080")
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
  	});
  });
});*/