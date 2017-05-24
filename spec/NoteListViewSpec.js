(function(exports){
  'use scrict';

  var string = 'Doctor\'s apt';

  function handlesEmptyList() {
    var list = new Notepad();
    var view = new View(list);
    var html = "<ul></ul>";
    assert.isTrue(view.createListHTML() === html, view.createListHTML());
  }

  function returnOneNoteAsString() {
    var list = new Notepad();
    var view = new View(list);
    var html = "<ul><li><div>Doctor\'s apt</div></li></ul>";
    list.createNote(string);
    assert.isTrue(view.createListHTML() === html, view.createListHTML());
  }

  function returnsTwoNotesAsString() {
    var list = new Notepad();
    var view = new View(list);
    var html = "<ul><li><div>Doctor\'s apt</div></li><li><div>Doctor\'s apt</div></li></ul>";
    list.createNote(string);
    list.createNote(string);
    assert.isTrue(view.createListHTML() === html, view.createListHTML());
  }

handlesEmptyList();
returnOneNoteAsString();
returnsTwoNotesAsString();

})(this);
