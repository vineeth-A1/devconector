const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/post');
// Profile model
const Profile = require('../../models/Profile');
//validation
const validatePostInput = require('../../validation/post');
// route get api/posts/test
// desc tests post route
//acess public
// router.get('/', (req, res) => res.json({ msg: " profile work"}) );




router.get("/test", (req, res) => res.json({ msg: "posts works" }));

// route get api/posts
// desc  posts
//acess public
router.get('/' , (req, res) =>{
Post.find()
.sort({date: -1})
.then(posts => res.json(posts))
.catch(posts => res.status(404));
});
   

      
module.exports = router;
