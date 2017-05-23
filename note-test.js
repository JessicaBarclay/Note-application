(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);
  var noteList = new NoteList();

  function returnText() {

    if( note.getText() === string ) {
      console.log(note.getText());
    } else {
      throw Error('Object does not contain any text');
    }
  }

  function returnNoteListNotes(){

    noteList.setNotes(note);

    if( noteList.getNotes() === note) {
      console.log(noteList.getNotes());
    } else {
      throw Error('Object does not contain any Note objects');
    }
  }

  function createNewNote() {
    var noteList = new NoteList();
    var note = new Note(string);

    noteList.createNote(string);

    if( noteList.getNotes() === note ) {
      console.log(noteList.getNotes());
    } else {
      throw Error('Object does not contain any Note objects');
    }
  }

  createNewNote();
  returnNoteListNotes();
  returnText();

})(this);
