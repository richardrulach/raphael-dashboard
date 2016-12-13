

$(function() {
   GenerateDonut(labeldata, donutdata)
});


var donutdata = {
  'dataTotals':[
    {
      label:'North',
      value:100
    },
    {
      label:'East',
      value:290
    },
    {
      label:'South',
      value:40
    },
    {
      label:'West',
      value:53
    }
  ]
};

var labeldata = {
    labels:[{
        label:'North',
        colour:'#579BD8'
    },{
        label:'East',
        colour:'#EF7E32'
    },{
        label:'South',
        colour:'#A6A6A6'
    },{
        label:'West',
        colour:'#FFC000'
    }]
}



function GenerateDonut(labels, dataReceived) {


  var WIDTH = 600;
  var HEIGHT = 250;
  var THICKNESS = 45;
  var RADIUS = 65;

  // CENTRED VERTICALLY, ALIGNED TO THE RIGHT
  var CENTRE_X = WIDTH - (RADIUS + 2.5 * THICKNESS); 
  var CENTRE_Y = HEIGHT / 2;


  var r = new Raphael('paper', WIDTH, HEIGHT);


  // ADD LABELS
  var myLabels = labels['labels'];

  // var rects = new Array();
  // var textlabels = new Array();

  for (var i = 0; i < myLabels.length; i++){

      r.rect(75, 50 + 40 * i, 20, 20).attr({ 
          stroke: myLabels[i]['colour'],
          fill: myLabels[i]['colour']
      });

      r.text(105, 60 + 40 * i, myLabels[i]['label']).attr({ 
          'fill':'#444',
          'text-anchor':'start',
          'font-size': '13px'
      });

  }



  //loop through data to get the total
  var mydata = dataReceived['dataTotals'];
  var total = 0;
  for (var i = 0; i < mydata.length; i++) {
      total += mydata[i]['value'];
  }

console.log('total:'  + total);

  //loop through data and generate the donut chart
  var runningtotal = 0;
  var startx = CENTRE_X,
      starty = CENTRE_Y - RADIUS;
  
  for (var i = 0; i < mydata.length; i++) {
      var original_runningtotal = runningtotal;
      runningtotal += mydata[i]['value'];

      var alpha = 360 / total * runningtotal,
          a = (90 - alpha) * Math.PI / 180,
          x = CENTRE_X + RADIUS * Math.cos(a),
          y = CENTRE_Y - RADIUS * Math.sin(a),
          path;

      var gap_alpha = 360 / total * runningtotal - (360 / total * 0.5),
          gap_a = (90 - gap_alpha) * Math.PI / 180,
          gap_x = CENTRE_X + RADIUS * Math.cos(gap_a),
          gap_y = CENTRE_Y - RADIUS * Math.sin(gap_a);

      var label_alpha = 360 / total * (runningtotal - mydata[i]['value']/2),
          label_a = (90 - label_alpha) * Math.PI / 180,
          label_x = CENTRE_X + RADIUS * Math.cos(label_a),
          label_y = CENTRE_Y - RADIUS * Math.sin(label_a);

      var largearc = mydata[i]['value'] >= total/2 ? 1 : 0;

      path = [["M", startx, starty], ["A", RADIUS, RADIUS, 0, largearc, 1, gap_x, gap_y]];


      r.path(path).attr({
          "stroke-width": THICKNESS,
          'stroke':colorLookup(mydata[i]['label']),
          cursor: 'pointer'
      }).data(
        'type', mydata[i]['label']
      );

      r.text(label_x, label_y, mydata[i]['value']).attr({
          fill:'#fff',
          'font-size':"14px",
          'font-weight': 'bold',
          cursor: 'pointer'
      }).data(
        'type', mydata[i]['label']
      );

      startx = x;
      starty = y;
    

   }
}

function colorLookup(prop){
    for (var i = 0; i < labeldata['labels'].length; i++){
        if (prop == labeldata['labels'][i]['label']){
            return labeldata['labels'][i]['colour'];
        }
    }
}

function setEndPoints(centre_x, centre_y, elem, value, total, R){
    var alpha = 360 / total * value,
        a = ( elem.data('alpha_offset') - alpha) * Math.PI / 180,
        x = centre_x + R * Math.cos(a),
        y = centre_y - R * Math.sin(a);

    elem.data('x_end',x);
    elem.data('y_end',y);
    elem.data('alpha_end', elem.data('alpha_offset') - alpha );
}


