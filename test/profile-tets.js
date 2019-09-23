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

  it("post/ required fields", done => {
    let token = " ";
    chai
      .request(app)
      .post(login_route)
      .send({ email: "boppudi123@gmail.com", password: "1234567" })
      .then(res => {
        console.log(res.body.token);
        token = res.body.token;
        chai
          .request(app)
          .post(profile_route + "/experience")
          .set("Authorization", token)
          .send({ title: "educztion", company: "ttcs", from: " " })
          .then(res => {
            expect(res).to.have.status(400);
            console.log("sent");
            done();
          })
          .catch(() => console.log("error"));
      });
  });

  it("post/all fields are entered", done => {
    let token = " ";
    chai
      .request(app)
      .post(login_route)
      .send({ email: "boppudi123@gmail.com", password: "1234567" })
      .then(res => {
        console.log(res.body.token);
        token = res.body.token;
        chai
          .request(app)
          .post(profile_route + "/experience")
          .set("Authorization", token)
          .send({
            title: "developer",
            company: "tss",
            from: "02/03/2000 ",
            to: "12/12/2007"
          })
          .then(res => {
            expect(res).to.have.status(200);
            console.log("sent");
            done();
          })
          .catch(() => console.log("error"));
      });
  });
  it("get/education are required", done => {
    let token = "";
    chai
      .request(app)
      .post(login_route)
      .send({ email: "boppudi123@gmail.com", password: "1234567" })
      .then(res => {
        token = res.body.token;
        console.log(res.body.token);
        chai
          .request(app)
          .post(profile_route + "/education")
          .set("Authorization", token)
          .send({ school: " "
        })
          .then(res => {
            expect(res).to.have.status(400);
        console.log("sent")
            done();
          })
          .catch(() => console.log("error"));
      });
  });
it("get/ fields are correct status200" , (done) =>{
  let token = "";
    chai
      .request(app)
      .post(login_route)
      .send({ email: "boppudi123@gmail.com", password: "1234567" })
      .then(res => {
        token = res.body.token;
        console.log(res.body.token);
        chai
          .request(app)
          .post(profile_route + "/education")
          .set("Authorization", token)
          .send({ school: "harshini",
        degree: "btech",
      fieldofstudy: "ece",
    from:"10/10/2001",
  to:"02/02/2004" })
          .then(res => {
            expect(res).to.have.status(200);
            console.log("details sent");
            done();
          })
          .catch(() => console.log("error"));
      });
})
  });
