var app = require('./app.js');
var request = require('supertest').agent(app.listen());

describe("Super simple express API demo", function () {
  it("returns json", function (done){
	request
	  .get('/user')
	  .expect('Content-Type', /json/)
	  .end(done);
  });
  it("and contains the correct data", function (done){
	request
	  .get('/user')
	  .expect({ name: 'tobi' })
	  .end(done);
  });
  
  it("and gives a 200 status", function (done){
	request
	  .get('/user')
	  .expect(200, done);
  });
});
