(function(exports){
  'use scrict';

  var string = 'Doctor\'s apt';
  var list = new NoteList();
  list.createNote(string);
  list.createNote(string);
  var html = "<ul><li><div>Doctor\'s apt</div></li><li><div>Doctor\'s apt</div></li></ul>";
  var view = new View(list);

  function returnString() {
    assert.isTrue(view.createListHTML() === html, view.createListHTML());
  }

  returnString();

})(this);
