var rafa = new Raphael('paper', 600, 250);

var textStyle = {
  'font-family': 'courier',
  'font-weight': 'bold',
  'font-size': 20
};

var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

var origin = rafa.text(27, 10, "(0,0)")
origin.attr(textStyle);
origin.attr('fill', 'green');

var end = rafa.text(545, 235, "(650,250)")
end.attr(textStyle);
end.attr('fill', 'red');

var hello = rafa.text(600 / 2, 250 / 2, "Welcome\nto\nRaphael");
hello.attr(textStyle);
hello.attr('font-size', '30');
hello.attr('fill', '#428ff4');

var midpoint = rafa.circle(600 / 5, 250 / 2, 3);
midpoint.attr('fill', 'black');

var rotate = rafa.text(600 / 5, 250 / 2, "This will rotate");
rotate.attr(textStyle);
rotate.attr('fill', '#7c91ad');
rotate.transform('r-60');

var midpoint2 = rafa.circle(600 / 5 * 4, 250 / 2, 3);
midpoint2.attr('fill', 'black');

var rotateMulti = rafa.text(600 / 5 * 4, 250 / 2, "Multi-line\ntext also\nrotates");
rotateMulti.attr(textStyle);
rotateMulti.attr('fill', '#154a8e');
rotateMulti.transform('r60');

var rotateEndpoint = rafa.text(600 / 2, 250 / 4 * 3, "rotation\nby endpoint");
rotateEndpoint.attr(textStyle);
rotateEndpoint.attr('fill', 'black');
rotateEndpoint.attr('font-size', '15');

var endPoint = rotateEndpoint.attr('x') + rotateEndpoint.getBBox().width/2;
var rotationPoints = ',' + endPoint + ',' + rotateEndpoint.attr('y'); 

rotateEndpoint.transform('r-30'  + rotationPoints);

var rotationPoint = rafa.circle(endPoint, rotateEndpoint.attr('y'),3 );
rotationPoint.attr('fill', 'black');