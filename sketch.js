//THIS CODE MOVES THE STRING ACCORDING TO HORIZONTAL MOUSE LOCATION - CLOSER TO AN EDGE >> TEXT MOVES AWAY FROM THAT EDGE

//stuff to remember:

//first define variabes, in setup give them values and then you can use them in draw etc.

//windowWidth & windowHeight are native variables for the size of the browser window or setion window

//createElement is a function that creates a HTML object by it's tag (p for ex.) and it's content

//x.position is a function that influences x's location on the browser window

// window.saveDataAcrossSessions = true;

var lines;
var paragraph;
var pos;
var string;
var targetArray = []
// var xprediction,yprediction;

function preload(){
  string = loadStrings('assets/test.txt');
}

function setup() {
  frameRate(120);

  // pos = 0;
  // length = 77300;
  // maxSpeed = 10;

  $(document).ready(function() {
    // string = loadStrings('assets/test.txt');
    // console.log(string);
    // paragraph = createDiv('');//,join(string,' '));
    // paragraph.attribute('id','target');
    var a = select('#target').html(join(string,' '));
    console.log('this is a: ',a);


    const target = document.querySelector('#target');
    //
    var results = Splitting({ target: target, by: 'lines' });
    //
    // container = select('#container');
  });




  //this makes an array that is #ed by rows but is one complete row
//   var rowArray = [];
//   var row = createElement('div');
//
//   for (let row_idx = 0; row_idx < results[0].lines.length; row_idx++) {
//     rowArray[row_idx] = createElement('div');
//     rowArray[row_idx].attribute('id',row_idx);
//     // var selectRow = select('#'+row_idx);
//     for (let word_idx = 0; word_idx < results[0].lines[row_idx].length; word_idx++){
//       rowArray[row_idx].child(results[0].lines[row_idx][word_idx]);
//     }
//     row.child(rowArray[row_idx].elt);
//     row.attribute('id','type');
// }
  // console.log('this is rowArray[0]: ', rowArray[0].elt);
  // console.log('this is results.lines[0].word[0]: ', results[0].lines[0][0]);
  // console.log('this is row: ', row.elt);




  // container.child(text);


  // row.position(0, 0.3 * windowHeight);

  // console.log('this is container: ', container);
  // console.log('this is lines: ', lines);
  // console.log('this is results: ', results);


  // target.position(pos - length, 0.3 * windowHeight);

  // for (let i = 1; i < 4; i++) {
  //   targetArray[i] = createElement('div',join(string,' '))
  //   targetArray[i].attribute('class','target');
  //   targetArray[i].attribute('dir','rtl');
  //   targetArray[i].style('white-space', 'nowrap');
  //   container.child(targetArray[i]);
  //   targetArray[i].position(pos - length + (windowHeight * i), (0.3 * windowHeight) + (i * 0.2 * windowHeight));
  // }
  // console.log(windowHeight);





 //array of all the splits in #target


}
