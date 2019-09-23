const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
chai.use(http);
const app = require("../server");
const profile_route = "/api/profile";
const login_route = "/api/users/login";
describe("profile", () => {
  it("Get/ no profile", done => {
    chai
      .request(app)
      .get(profile_route + "/handle/vinee")

      .then(res => {
        expect(res).to.have.status(404);
        //console.log(res.body.errors.noprofile);
        expect(res.body.errors.noprofile).to.equal(
          "There is no profile for this user"
        );

        done();
      })
      .catch(() => console.log("errors"));
  });

  it("Get/there are no profiles ", done => {
    chai
      .request(app)
      .get("/all")
      .then(res => {
        expect(res).to.have.status(404);
        done();
      })
      .catch(() => console.log("errors"));
  });
  it("Get/there is no profile for this user ", done => {
    chai
      .request(app)
      .get("/user/:user_id")
      .send({ id: "" })
      .then(res => {
        expect(res).to.be.status(404);
        done();
      })
      .catch(() => console.log("error"));
  });

  it("get/ status feld is required", done => {
    chai
      .request(app)
      .post("/")
      .send({
        status: ""
      })
      .then(res => {
        expect(res).to.have.status(404);
        done();
      })
      .catch(() => console.log("errors"));
  });
  it("get/ skills feld is required", done => {
    chai
      .request(app)
      .post("/")
      .send({
        status: "",
        skills: ""
      })
      .then(res => {
        expect(res).to.have.status(404);
        done();
      })
      .catch(() => console.log("errors"));
  });

  it("get/  feld is required", done => {
    chai
      .request(app)
      .post("/")
      .send({
        status: ""
      })
      .then(res => {
        expect(res).to.have.status(404);
        done();
      })
      .catch(() => console.log("errors"));
  });

  it.only("post/experience", done => {
    let token = " ";
    chai
      .request(app)
      .post(login_route)
      .send({ email: "hitler123@gmail.com", password: "789456" })
      .then(res => {
        console.log(res.body.token);
        token = res.body.token;
        chai
          .request(app)
          .post(profile_route + "/experience")
          .set("Authorization", token)
          .send({ title: "" })
          .then( () => {
            expect(400);

            done();
          })
          .catch(() => console.log("error"));
      });
  });
});
