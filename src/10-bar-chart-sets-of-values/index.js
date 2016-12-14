var rafa = new Raphael('paper', 600, 250);
var outlineOfPaperObject = rafa.rect(0, 0, 600, 250);

var FULL_SIZE = 160,
    BAR_WIDTH = 13,
    SPACING = 4;

var data = {
    x_names:['Mon','Tue','Wed','Thu','Fri'],
    sets:[
        {
            name:'Offline',
            colour:'red',
            values:[10,15,20,25,30]
        },
        {
            name:'Online',
            colour:'blue',
            values:[10,115,20,25,30]
        },
        {
            name:'Online',
            colour:'green',
            values:[20,25,30,10,115]
        }
    ] 
}

var title = rafa.text(300, 25, "Weeks Sales");
title.attr({
  "font-weight": "bold",
  "font-size": "22"
});


var counter = 0;
var max = 0;

// GET THE MAXIMUM VALUE
for (var key in data.sets) {
    for (var key2 in data.sets[key].values) {
        max = data.sets[key].values[key2] > max ? data.sets[key].values[key2] : max; 
    }
}


for (var key = 0; key < data.x_names.length; key++) {

    for (ds in data.sets)
    {
        console.log(data.sets[ds].values[key]);


        var x = 45 + (BAR_WIDTH + SPACING) * counter++;
        var newItem = FULL_SIZE * data.sets[ds].values[key] / max;

        rafa.rect( x, 215 - newItem, BAR_WIDTH, newItem ).attr("fill", data.sets[ds].colour);
    }

}

//var yStart = 215;

// for (var i = 0; i < max; i += 20){
//   var len = (counter + 1) * (BAR_WIDTH + SPACING + 1) - SPACING;
//   var newY = yStart - (FULL_SIZE * i/max);

//   var newLabel = Math.floor(FULL_SIZE * i/max);
//   rafa.text(35, newY, newLabel)
//   rafa.path("M44 " + newY + "L" + len + " " + newY).toBack();      
// }

