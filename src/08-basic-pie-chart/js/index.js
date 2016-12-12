Raphael.fn.pieChart = function(cx, cy, r, values, labels, stroke) {
  var paper = this,
    rad = Math.PI / 180,
    chart = this.set();

  function sector(cx, cy, r, startAngle, endAngle, params) {
    console.log(params.fill);
    var x1 = cx + r * Math.cos(-startAngle * rad),
      x2 = cx + r * Math.cos(-endAngle * rad),
      y1 = cy + r * Math.sin(-startAngle * rad),
      y2 = cy + r * Math.sin(-endAngle * rad);
    return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
  }
  var angle = 0,
    total = 0,
    start = 0,
    process = function(j) {
      var value = values[j],
        angleplus = 360 * value / total,
        popangle = angle + (angleplus / 2),
        color = Raphael.hsb(start, .75, 1),
        ms = 500,
        delta = 30,
        bcolor = Raphael.hsb(start, 1, 1),
        p = sector(cx, cy, r, angle, angle + angleplus, {
          fill: "90-" + bcolor + "-" + color,
          stroke: stroke,
          "stroke-width": 3
        });
      paper.text( 320, 90 + 35 * j, labels[j] ).attr(
        { "text-anchor":"start","font-size":"18px","fill":bcolor,"font-weight":"bold"});
      paper.rect( 320 - 15, 90 + 35 * j - 5, 10, 10 ).attr({"fill":bcolor});

      angle += angleplus;
      chart.push(p);
      start += .04;
    };

  // GET TOTAL TO GENERATE PERCENTAGES
  for (var i = 0, ii = values.length; i < ii; i++) {
    total += values[i];
  }

  for (i = 0; i < ii; i++) {
    process(i);
  }
  return chart;
};

$(function() {
  
  
  var values = [35, 40, 35, 40],
    labels = ['tom', 'bill', 'steve', 'mike'];

  var rafa = new Raphael('paper', 600, 250);
  
  rafa.text(230,30,"Sales over the last week").attr({
    "font-weight":"bold","font-size":"20px"
  });
  rafa.rect(0, 0, 600, 250);
  rafa.pieChart(170, 150, 100, values, labels, "#fff");

});