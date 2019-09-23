const chai = require("chai");
const http = require("chai-http");
const expect = chai.expect;
chai.use(http);
const app = require("../server");
const post_route = "/api/posts";
const login_route = "/api/users/login";
describe("posts", () => {
  it("get", done => {
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
          .post("/api/posts")
          .set("Authorization", token)
          .send({
            text: " "
          })
          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get", done => {
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
          .post("/api/posts")
          .set("Authorization", token)
          .send({
            text: " i am  "
          })
          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get", done => {
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
          .post("/api/posts")
          .set("Authorization", token)
          .send({
            text: " i am a developer and working in msrcosmos last on month "
          })
          .then(res => {
            expect(res).to.have.status(200);
            //console.log(res.body)
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get/all post related to profile ", done => {
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
          .get("/api/posts")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(200);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get/by passing post id we get post", done => {
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
          .get("/api/posts/5d88b012219d8832825e5680")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(200);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get/by passing wrong id we get status 400 and msg-no profile found ", done => {
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
          .get("/api/posts/5d88b012219d8832825e56812")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get/like for post", done => {
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
          .post("/api/posts/like/5d88b012219d8832825e5680")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(200);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
  });
  it("get/user alredy liked the post", done => {
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
          .post("/api/posts/like/5d88b012219d8832825e5680")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it("get/no post found", done => {
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
          .post("/api/posts/like/5d88b012219d8832825e568")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(404);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it("get/unlike the post", done => {
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
          .post("/api/posts/unlike/5d88b012219d8832825e5680")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(200);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it("get/already unlike", done => {
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
          .post("/api/posts/unlike/5d88b012219d8832825e5680")
          .set("Authorization", token)

          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it("get/in comment text filed is required", done => {
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
          .post("/api/posts/comment/5d88b012219d8832825e5680")
          .set("Authorization", token)
.send({ text: " "})
          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it("get/in comment text filed is required", done => {
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
          .post("/api/posts/comment/5d88b012219d8832825e5680")
          .set("Authorization", token)
.send({ text: " hie "})
          .then(res => {
            expect(res).to.have.status(400);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
  it.only("get/in comment text filed is required", done => {
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
          .post("/api/posts/comment/5d88b012219d8832825e5680")
          .set("Authorization", token)
.send({ text: " i think your new to the deeloper keep going  on "})
          .then(res => {
            expect(res).to.have.status(200);
            console.log(res.body);
            done();
          })
          .catch(() => console.log("errors"));
      });
      
  });
});
