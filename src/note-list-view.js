(function(exports) {
  'use strict';

  function View(){

  };

  View.prototype.createListHTML = function() {
    var string = "";
    for(var i = 0; i < this.notes.length; i++) {
          string += "<li><div>" + this.notes[i].getText() + "</div></li>";
        };
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
