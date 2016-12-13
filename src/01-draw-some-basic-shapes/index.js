
var rafa = new Raphael('paper', 600, 250);

var outlineOfPaperObject = rafa.rect(0,0,600,250);

var circle = rafa.circle(100,120,80);
circle.attr({'fill':'#00f'});

var rect = rafa.rect(215,100,150,50);
rect.attr({'fill':'#f00'});
           
var square = rafa.rect(400,45,150,150);
square.attr({'fill':'#ff0'});