(function(exports){
  'use strict';

  function NoteList(){
    this.notes = [];

    NoteList.prototype.getNotes = function () {
      return this.notes[0];
    };

    NoteList.prototype.setNotes = function (note) {
      this.notes.push(note);
    };
  }

  exports.NoteList = NoteList;

  })(this);
