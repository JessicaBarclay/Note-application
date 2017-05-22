(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);
  var noteList = new NoteList();

  function returnText() {

    if( note.getText() === string ) {
      console.log(note.getText());
    } else {
      throw Error( 'Object does not contain any text' );
    }
  }

  function returnNoteList(){

    noteList.setNotes(note);

    if( noteList.getNotes() === note) {
      console.log(noteList.getNotes());
    } else {
      throw Error( 'Object does not contain any Note objects' );
    }
  }

  returnNoteList();
  returnText();

})(this);
