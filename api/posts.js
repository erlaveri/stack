const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const _ = require('lodash');
// const Post = mongoose.model('Post');

const Post = require('../models/Post');


router.route('/')
  .get(async function (req, res) {
    const posts = await Post.find().lean().exec();
    res.send(posts);
  })
  .post(async function (req, res) {

    const posts = await Post.find().lean().exec();
    // setTimeout(() => res.send(posts), 2000)
  })
;


module.exports = router;
