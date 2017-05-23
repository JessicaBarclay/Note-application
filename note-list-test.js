(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);
  var noteList = new NoteList();

  function returnNoteListNotes(){
    noteList.setNotes(note);
    assert.isTrue( noteList.getNotes() === note);
  }

  function createNewNote() {
    var noteList = new NoteList();
    noteList.createNote(string);
    assert.isTrue(noteList.getNotes().constructor === note.constructor);
  }

  createNewNote();
  returnNoteListNotes();

})(this);
