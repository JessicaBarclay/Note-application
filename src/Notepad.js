(function(exports){
  'use strict';

  function Notepad(){
    this.notes = [];
  }

  Notepad.prototype.getNotes = function () {
    return this.notes;
  };

  Notepad.prototype.createNote = function (string) {
    var note = new Note(string);
    this.notes.push(note);
  };

  exports.Notepad = Notepad;

  })(this);
