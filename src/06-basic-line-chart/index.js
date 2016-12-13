var rafa = new Raphael('paper', 600, 250);
var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

var GRAPH_HEIGHT = 160,
  GRAPH_WIDTH = 510,
  X_START = 45,
  Y_BOTTOM = 215,
  Y_TOP = 55;

var items = {
  "header": "Online orders",
  "xlabels": [
    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
  ],
  "datasets": [{
    "label": "Mikey", // UNUSED IN THIS EXAMPLE
    "color": "darkGreen",
    "datapoints": [20, 30, 25, 40, 35, 55, 30]
  }]

}

var title = rafa.text(300, 25, items.header);
title.attr({
  "font-weight": "bold",
  "font-size": "22"
});

var counter = 0;
var max = 0;
var min = Number.MAX_SAFE_INTEGER;
var elements = 0;

// FIND MAX AND MIN VALUES IN THE DATA
for (var key in items.datasets) {
  elements = items.datasets[key].datapoints.length;

  for (var i = 0; i < items.datasets[key].datapoints.length; i++) {
    if (max < items.datasets[key].datapoints[i]) {
      max = items.datasets[key].datapoints[i];
    }
    if (min > items.datasets[key].datapoints[i]) {
      min = items.datasets[key].datapoints[i];
    }
  }
}

var SPACING = GRAPH_WIDTH / elements;

for (var key in items.datasets) {

  var pathDef = '';
  var ds = items.datasets[key];

  for (var i = 0; i < ds.datapoints.length; i++) {
    var x = X_START + (SPACING * i) + (SPACING / 2);
    var newY = Y_BOTTOM - GRAPH_HEIGHT * ds.datapoints[i] / max;

    if (i == 0) {
      pathdef = 'M ' + x + ' ' + newY;
    } else if (i == 1) {
      pathdef += 'L ' + x + ' ' + newY;
    } else {
      pathdef += ' ' + x + ' ' + newY;
    }
  }

  var newLine = rafa.path(pathdef);
  newLine.attr({
    "stroke": ds.color
  });

}

// DRAW X AND Y AXES
rafa.path('M' + X_START + ' ' + (Y_BOTTOM - GRAPH_HEIGHT) +
  'L' + X_START + ' ' + Y_BOTTOM + ' ' +
  (X_START + GRAPH_WIDTH) + ' ' + Y_BOTTOM);

// LABEL X AXIS SECTIONS
for (var i = 0; i <= items.xlabels.length; i++) {
  var newX = X_START + SPACING * i;
  rafa.path('M' + newX + ' ' + Y_BOTTOM + ' ' +
    'L' + newX + ' ' + (Y_BOTTOM + 10));

  if (i < items.xlabels.length)
    rafa.text(newX + SPACING / 2, Y_BOTTOM + 8, items.xlabels[i]);
}

// SHOW HIGH AND LOW X VALUES
rafa.text(X_START - 10, Y_BOTTOM, 0);
rafa.text(X_START - 10, Y_BOTTOM - GRAPH_HEIGHT, max);