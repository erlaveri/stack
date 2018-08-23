const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const _ = require('lodash');
const Note = mongoose.model('Note');

// const Note = require('../models/Note');

router.route('/')
  .get(async function (req, res) {
    const posts = await Note.find().exec();
    res.send(posts);
  })
  .post(async function (req, res) {
    let post = new Note(req.body);
    post = await post.save();
    res.status(201);
    res.send(post.id);
  })
;

router.route('/:id')
  .get(async function (req, res) {
    let id = req.params.id;
    const note = await Note.findById(id).lean().exec();
    res.send(note);
  })
  .delete(async function (req, res) {
    let id = req.params.id;
    const note = await Note.findByIdAndRemove(id).lean().exec();

    note ? res.send(note) : res.status(500).send({ error: 'Not found' });
  })
;


module.exports = router;
