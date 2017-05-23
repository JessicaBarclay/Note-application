(function(exports){
  'use strict';

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  NoteList.prototype.createNote = function (string) {
    var note = new Note(string);
    this.notes.push(note);
  };

  exports.NoteList = NoteList;

  })(this);
