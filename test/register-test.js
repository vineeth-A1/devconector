const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
chai.use(http);

const app = require("../server");


describe("users", () => {
  
  
  it("get/email is wrong", done => {
    chai
      .request(app)
      .post("/api/users/register")
      .send({
        name: "adolf",
        email: "hitler2gmail.com",
        password: "1234563",
        password2: "1234563"
      })
      .then(res => {
        expect(res).to.have.status(400);
        done();
      })
      .catch(err => res.json(err));
  });
  it("Get/user create", done => {
    const input = {
      name: "noil",
      email: "noilee12@gmail.com",
      password: "1789456",
      password2: "1789456"
    };
    chai
      .request(app)
      .post("/api/users/register")
      .send(input)
      .then(res => {
        expect(res).to.have.status(201);
        expect(res.body.user).to.exist
        done();
      })
      .catch(() => console.log("user"));
  });
  it("GET/password incorrect", done => {
    chai
      .request(app)
      .post("/api/users/register")
      .send({
        name: "anilpdv",
        email: "anilhfpdv@gmail.com",
        password: "12345",
        password2: "1234567"
      })
      .then(res => {
        expect(res).to.have.status(400);
        done();
      })
      .catch(() => console.log("error"));
  });
});
