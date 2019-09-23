const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
chai.use(http);

const app = require("../server");
describe("users", () => {
  it("Get/correct login", done => {
    chai
      .request(app)
      .post("/api/users/login")
      .send({
        email: "hitler123@gmail.com",
        password: "789456",
        
      })
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body.token).to.exist;
        
        
        done();
      })
      .catch(() => console.log("error"));
  });
  it("Get/incorrect user",(done)=>{
    chai.request(app)
    .post("/api/users/login")
    .send({
      email:"hitler12@gmail.com",
      password:"789456"
    })
    .then(res => {
      expect(400)
      expect(res.body.errors.email).to.be.equal('User not found')
      done();
    })
    .catch(() => console.log("errors") )
  })
  it('Get/email is required', (done) =>{
    chai.request(app)
    .post("/api/users/login")
    .send({
      email:" ",
      password:"789456"
    })
    .then(res => {
      expect(400)
      expect(res.body.errors.email).to.be.equal('Email is invalid')
      done();
    })
    .catch(() => console.log("errors") )

  })
  
  it('Get/password is required', (done) =>{
    chai.request(app)
    .post("/api/users/login")
    .send({
      email:"hitler123@gmail.com ",
      password:" "
    })
    .then(res => {
      expect(400)
      expect(res.body.errors.password).to.be.equal('Password field is required')
      done();
    })
    .catch(() => console.log("errors") )

  })
  it('Get/password is wrong', (done) =>{
    chai.request(app)
    .post("/api/users/login")
    .send({
      email:"hitler123@gmail.com ",
      password:"78"
    })
    .then(res => {
      expect(400)
      expect(res.body.errors.password).to.be.equal('Password must be at least 6 characters')
      done();
    })
    .catch(() => console.log("errors") )

  })
  

});
