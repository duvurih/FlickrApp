/**
 * Testing Flickr API Routes
 */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Flickrs Api All Images', function() {
    it('Retrieve all flickr images', function(done) {
        chai.request('http://localhost:3000')
          .get('/flickrs')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            done();
          }) 
      });
  });

  describe('Flickrs Api All Images By Tag', function() {
    it('Retrieve all flickr images By Tag', function(done) {
        chai.request('http://localhost:3000')
          .get('/flickrs/flowers')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            done();
          }) 
      });
  });
