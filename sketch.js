//THIS CODE MOVES THE STRING ACCORDING TO HORIZONTAL MOUSE LOCATION - CLOSER TO AN EDGE >> TEXT MOVES AWAY FROM THAT EDGE

//stuff to remember:

//first define variabes, in setup give them values and then you can use them in draw etc.

//windowWidth & windowHeight are native variables for the size of the browser window or setion window

//createElement is a function that creates a HTML object by it's tag (p for ex.) and it's content

//x.position is a function that influences x's location on the browser window

// window.saveDataAcrossSessions = true;


var string;
var maxSpeed;
var pos;
var type;

// var xprediction,yprediction;

function preload(){
  string = loadStrings('assets/test.txt');
}

function setup() {



  // pos = 0;
  // length = 77300;
  // maxSpeed = 10;

  $(document).ready(function() {
    // var string;
    var maxSpeed;
    var pos;
    var type;


    frameRate(120);
    var maxSpeed = 10;
    var pos = 0;
    // string = loadStrings('assets/test.txt');
    // console.log(string);
    // paragraph = createDiv('');//,join(string,' '));
    // paragraph.attribute('id','target');
    var paragraph = select('#target').html(join(string,' '));
    console.log('this is paragraph: ',paragraph);


    const target = document.querySelector('#target');
    //
    var results = Splitting({ target: target, by: 'lines' });
    //
    // container = select('#container');

    // var row = paragraph.elt;

    $(function(){
      var $row = $('#target').clone().attr("id", "type");
      $('#container').html($row);
  });

  // console.log('this is results: ',results);
  // console.log('this is $row: ',$row);

    for (let row_idx = 0; row_idx < results[0].lines.length; row_idx++) {
      // results[0].lines[row_idx][0].setAttribute('id','row'+row_idx.toString());
      var a = document.createElement('a');
      a.setAttribute('id','row'+row_idx.toString());
      results[0].el.insertBefore(a, results[0].lines[row_idx][0]);
      }



  });


}
var pos = 0;
var maxSpeed = 5;

function draw() {
  var type = document.querySelector('#type')


  if (mouseX < 0.45 * windowWidth) {
  move = map(mouseX, 0, 0.45 * windowWidth, maxSpeed, 0);
  } else if (mouseX > 0.55 * windowWidth) {
    move = map(mouseX, 0.55 * windowWidth, windowWidth, 0, -maxSpeed);
  } else move = 0;

  pos = pos - move;
  type.scrollTo(pos,0);
  type.scrollTo({
    behavior: "smooth"
  });
}
