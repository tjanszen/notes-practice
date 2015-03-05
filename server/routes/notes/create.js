'use strict';

var Note = require('../../models/note');

module.exports = {
  handler: function(request, reply) {
    request.payload.userId = request.auth.credentials._id;
    var note = new Note(request.payload);
    console.log(note);
    note.save(function(err) {
      if(err){
        console.log(err)
        reply().code(400);
      }else{
        reply(note);
      }
    });
  }
};
