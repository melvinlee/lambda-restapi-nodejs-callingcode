const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

var host = process.env.TEST_HOST;

describe("CallingCode", () => {
  describe("GET /callingcode", () => {
    it("it should return list of calling code", done => {
      chai
        .request(host)
        .get("/callingcode")
        .end((error, res) => {
          res.should.have.a.status(200);
          res.body.should.be.a("array");
          res.body.should.have.length.above(10);
          done();
        });
    });
  });

  describe("GET /callingcode/lookup", () => {
    it("it should return country when callingnumber prefix is match", done => {
      chai
        .request(host)
        .get("/callingcode/lookup?number=65123456789")
        .end((error, res) => {
          res.should.have.a.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("65");
          res.body.should.have.property("country");
          done();
        });
    });

    it("it should NOT return country when callingnumber prefix is NOT match", done => {
      chai
        .request(host)
        .get("/callingcode/lookup?number=00123456789")
        .end((error, res) => {
          res.should.have.a.status(200);
          res.body.should.be.a("object");
          res.body.should.not.have.property("code");
          res.body.should.not.have.property("country");
          done();
        });
    });
  });

  describe("GET /callingcode/{id}", () => {
    it("it should return country when code is match", done => {
      chai
        .request(host)
        .get("/callingcode/44")
        .end((error, res) => {
          res.should.have.a.status(200);
          res.body.should.be.a("array");
          res.body.should.have.length.above(0);
          done();
        });
    });
  });

  describe("GET /callingcode/{id}", () => {
    it("it should NOT return country when code is NOT found", done => {
      chai
        .request(host)
        .get("/callingcode/00")
        .end((error, res) => {
          res.should.have.a.status(200);
          res.body.should.be.a("array");
          res.body.should.have.length.below(1);
          done();
        });
    });
  });
});
