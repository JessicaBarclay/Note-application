(function(exports){
  'use strict';

  function NoteList(){
    this.notes = [];

    NoteList.prototype.getNotes = function () {
      for(var i = 0; i < this.notes.length; i++) {
        return this.notes[i];
      }
    };

    NoteList.prototype.setNotes = function (note) {
      this.notes.push(note);
    };

    NoteList.prototype.createNote = function (string) {
      var note = new Note(string);
      this.notes.push(note);
    };
  }

  exports.NoteList = NoteList;

  })(this);
