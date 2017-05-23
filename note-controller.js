(function(exports){
  function changeText() {
    var element = document.getElementById('app');
    element.text = 'howdy';
  }
  exports.changeText = changeText;
})(this);
