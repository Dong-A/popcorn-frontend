var still = document.querySelector('.movie-still');
var stillControlButtons = still.querySelectorAll('button');
var stillView = still.querySelector('.movie-still-view');

console.log(stillView);

var changeStillView = function() {
  var stillImg = this.querySelector('img');
  var view = stillView.querySelector('img');
  var src = stillImg.getAttribute('src');
  var alt = stillImg.getAttribute('alt');

  view.setAttribute('src', src);
  view.setAttribute('alt', alt);

};

for ( var i = 0, l = stillControlButtons.length; i < l; i++ ) {
  stillControlButtons[i].onclick = changeStillView;
}
