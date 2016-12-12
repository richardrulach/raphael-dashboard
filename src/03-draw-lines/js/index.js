var rafa = new Raphael('paper', 600, 250);
var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

rafa.path('M0,0L50,50');

rafa.path('M100,100H50');

rafa.path('M200,100V150');

var longLine = rafa.path('M100,200H400');
longLine.attr(
  {
    'arrow-end':'block-wide-long',
    'stroke-width':'10',
    'stroke':'red'
  }
);

var multiLine = rafa.path('M300,130L350,80,380,100,410,80,440,70,460,110,490,60,580,220');
multiLine.attr(
  {
    'stroke-width':'4',
    'stroke':'blue'
  }
);


var curve1 = rafa.path('M420,200C420,100,520,100,520,200');
curve1.attr(
  {
    'stroke-width':'4',
    'stroke':'green'
  }
);

var curve2 = rafa.path('M150,50S320,-10,540,40Z');
curve2.attr(
  {
    'stroke-width':'4',
    'stroke':'brown',
    'fill':'grey'
  }
);