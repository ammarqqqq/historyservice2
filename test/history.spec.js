process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');

let chai = require('chai');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let sinon = require('sinon');

sinon.stub(require('../src/consulLookup.js'), 'serviceLookup').returns(
  new Promise(
   function(resolve , reject) {
     var reply = {
       address: 'localhost',
       port: 27017,
       routePath: 'historytable'
     }
     resolve(reply)
   }
 )
);


var request = require('request');
// var rp = require('request-promise');

let Model = require('../src/models/history');
let server = require('../src/server');


chai.use(require('chai-http'));

describe('Integration-test: Server, History', () => {

  beforeEach((done) => { //Before each test we empty the database
    Model.remove({}, (err) => {
          done();
    });
  });

  /*
  * Test the /GET info route
  */
  describe('/GET info', () => {
      it('it should send an info message', (done) => {
        chai.request(server)
        .get('/info')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
      });
  });

  describe('/Post savehistory', () => {
      it('it should POST a history instance', (done) => {
        chai.request(server)
            .post('/savehistory')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(
              {
                'owner_id': 'dummy_id',
                'historystring': 'historical event test'
              }
            )
            .end(function(err, res) {
              expect(err).to.be.null;
              expect(res).to.have.status(200);
              expect(res).to.be.json;
              done();
            });
      });
  });

  describe('/GET all history for user', () => {
      it('it should provide all history instances for a specific user', (done) => {
        chai.request(server)
        .get('/getallhistoryforobject')
        .send(
          {
            'owner_id': 'dummy_id'
          }
        )
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();
        });
      });
  });
  describe('/GET all history', () => {
      it('it should provide all history instances', (done) => {
        chai.request(server)
        .get('/getallhistory')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();
        });
      });
  });

});
