'use strict';

var mongoose = require('mongoose');
var Note;

var noteSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    tags: [String],
    userId: {type: mongoose.Schema.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now, required: true}
});

var Note = mongoose.model('Note', noteSchema);
module.exports = Note;
