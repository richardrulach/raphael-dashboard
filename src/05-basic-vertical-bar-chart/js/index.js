var rafa = new Raphael('paper', 600, 250);
var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

var FULL_SIZE = 160,
    BAR_WIDTH = 13,
    SPACING = 4;

var items = {
  "1":"30","2":"18","3":"25","4":"4","5":"2",
  "6":"43","7":"34","8":"22","9":"54","10":"25",
  "11":"4","12":"6","13":"66","14":"54","15":"48",
  "16":"67","17":"45","18":"3","19":"0","20":"35",
  "21":"43","22":"42","23":"65","24":"45","25":"6",
  "26":"5","27":"33","28":"43","29":"58","30":"34"
}

var title = rafa.text(300, 25, "June Orders");
title.attr({
  "font-weight": "bold",
  "font-size": "22"
});


var counter = 0;
var max = 0;

for (var key in items) {
  if (max < items[key]){
    max = items[key];    
  }
}

for (var key in items) {
  var x = 45 + (BAR_WIDTH + SPACING) * counter++;
  var newItem = FULL_SIZE * items[key] / max;

  rafa.rect( x, 215 - newItem, BAR_WIDTH, newItem ).attr("fill", "#76ad75");
  rafa.text(x+6.5, 222, key);
}

var yStart = 215;

for (var i = 0; i < max; i += 20){
  var len = (counter + 1) * (BAR_WIDTH + SPACING + 1) - SPACING;
  var newY = yStart - (FULL_SIZE * i/max);

  var newLabel = Math.floor(FULL_SIZE * i/max);
  rafa.text(35, newY, newLabel)
  rafa.path("M44 " + newY + "L" + len + " " + newY).toBack();      
}