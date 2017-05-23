(function(exports) {
  'use strict';

  var string = 'Doctor\'s apt';
  var note = new Note(string);

  function returnText() {
    assert.isTrue(note.getText() === string);
  }

  returnText();

})(this);
