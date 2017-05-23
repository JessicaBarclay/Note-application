(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);
  var noteList = new NoteList();

  function createNewNote() {
    noteList.createNote(string);
    assert.isTrue(noteList.getNotes()[0].constructor === note.constructor);
  }

  createNewNote();

})(this);
