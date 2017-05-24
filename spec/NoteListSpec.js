(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);
  var noteList = new Notepad();

  function createNewNote() {
    noteList.createNote(string);
    assert.isTrue(noteList.getNotes()[0].constructor === note.constructor);
  }

  function storesMultipleNotes() {
    var noteList = new Notepad();
    noteList.createNote(string);
    noteList.createNote("string");
    assert.isTrue(noteList.getNotes()[1].getText() === "string");
  }

  createNewNote();
  storesMultipleNotes();

})(this);
