var rafa = new Raphael('paper', 600, 250);
var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

var FULL_SIZE = 280;
var items = {
  "Mike": {
    "color": "red",
    "total": "100"
  },
  "Dave": {
    "color": "green",
    "total": "20"
  },
  "Jim": {
    "color": "blue",
    "total": "70"
  },
  "John": {
    "color": "yellow",
    "total": "60"
  }
}

var title = rafa.text(300, 25, "Sales this quarter");
title.attr({
  "font-weight": "bold",
  "font-size": "22"
});


var counter = 0;
var max = 0;

for (var key in items) {
  if (max < items[key].total){
    max = items[key].total;    
  }
}

for (var key in items) {
  rafa.text(110, 60 + 25 * counter++, key).attr({
    "font-weight": "bold",
    "font-size": "18"
  });
  
  rafa.rect(140, 23 + 25 * counter++, items[key].total/max * FULL_SIZE, 20).attr("fill", items[key].color);
}