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
    var type;


    frameRate(120);

    // string = loadStrings('assets/test.txt');
    // console.log(string);
    // paragraph = createDiv('');//,join(string,' '));
    // paragraph.attribute('id','target');
    var paragraph = select('#target').html(join(string,' '));

    const target = document.querySelector('#target');

    var results = Splitting({ target: target, by: 'lines' });

    // gradeText(results);

    $(function(){
      var $row = $('#target').clone().attr("id", "type");
      $('#container').html($row);
  });

    console.log(results);

  // console.log('this is results: ',results);
  // console.log('this is $row: ',$row);

    //adds <a> tag for internal linking
    for (let row_idx = 0; row_idx < results[0].lines.length; row_idx++) {
      // results[0].lines[row_idx][0].setAttribute('id','row'+row_idx.toString());
      var a = document.createElement('a');
      a.setAttribute('id','row'+row_idx.toString());
      results[0].el.insertBefore(a, results[0].lines[row_idx][0]);
      }

  });


}

var pos = 0;
var maxSpeed = 15;
var aInScreen = document.querySelector('#row0');


function draw() {

  var type = document.querySelector('#type')
  // console.log(type);
  if (mouseX < 0.49 * windowWidth) {
  move = map(mouseX, 0, 0.49 * windowWidth, maxSpeed, 0);
} else if (mouseX > 0.51 * windowWidth) {
    move = map(mouseX, 0.51 * windowWidth, windowWidth, 0, -maxSpeed);
  } else move = 0;

  pos = pos - move;
  type.scrollTo(pos,0);
  type.scrollTo({
    behavior: "smooth"
})

  for (let a_idx = 0; a_idx < 81; a_idx++) {
    aX = document.querySelector('#row'+a_idx.toString()).getBoundingClientRect().left;
    if ((aX > ((windowWidth-windowHeight)/2)) && (aX <((windowWidth-windowHeight)/2)+windowHeight)) {
      var aInScreen = document.querySelector('#row'+a_idx.toString());
    }
  }

  document.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
    console.log('enter hold')
    //scroll to next <a> on type
    type.scrollTo(aInScreen.getBoundingClientRect().left,0);



    //scroll same <a> in target in middle of SCREEN
    //make target visible and type invisible
    //scroll vertical with eyes
  }


// console.log('this is aInScreen: ', aInScreen);
})

// ----- functions ------
}

function gradeText(results){
  //adds hover event listener for each word
  var wordsArray = selectAll('.word'); //array of all .word class
  // console.log('this is wordsArray: ', wordsArray);
  lastWord = 0;
  for (let c_idx = 0; c_idx < results[0].words.length; c_idx++) {

    results[0].words[c_idx].addEventListener("mouseover", function(e) {
    //add the click event listener that will trigger the following:

      //1. get the current word's index number
      styleVal = getComputedStyle(e.target, 'style');
      thisWord = (int(styleVal.getPropertyValue('--word-index')));

      //2. cleans up the grades from text - MAYBE MAKE MORE EFFICIENT
      if (lastWord > 0) {
      for (let i = lastWord - 1; i < lastWord + 3; i++){
       wordsArray[i].style('font-weight' ,400);
      }
    }

      //3. grades the text where hovered
        wordsArray[thisWord - 1].style('font-weight' ,600);
        wordsArray[thisWord].style('font-weight' ,700);
        wordsArray[thisWord + 1].style('font-weight' ,600);
        wordsArray[thisWord + 2].style('font-weight' ,500);

        lastWord = thisWord
      })
  }
}

//---
// function draw() {
//
//   var type = document.querySelector('#type');
//   // console.log(type);
//
//   for (let a_idx = 0; a_idx < 81; a_idx++) { //need variable here
//     aX = document.querySelector('#row'+a_idx.toString()).getBoundingClientRect().left;
//     if ((aX > ((windowWidth-windowHeight)/2)) && (aX <((windowWidth-windowHeight)/2)+windowHeight)) {
//       var aInScreen = document.querySelector('#row'+a_idx.toString());
//     }
//   }
//
//
//
//
//
//   if ((mouseY < 0.4 * windowHeight) || (mouseY > 0.6 * windowHeight)) {
//     type.scrollTo(aInScreen.getBoundingClientRect().left,0);
//     //scroll same <a> in target in middle of SCREEN
//     //     //make target visible and type invisible
//     //     //scroll vertical with eyes
//   } else if (mouseX < 0.45 * windowWidth) {
//           move = map(mouseX, 0, 0.45 * windowWidth, maxSpeed, 0);
//           } else if (mouseX > 0.55 * windowWidth) {
//                 move = map(mouseX, 0.55 * windowWidth, windowWidth, 0, -maxSpeed);
//           } else move = 0;
//
// pos = pos - move;
// type.scrollTo(pos,0);
// type.scrollTo({
// behavior: "smooth"});
// //   document.addEventListener('keyup', event => {
// //   if (event.code === 'Enter') {
// //     console.log('enter hold')
// //     //scroll to next <a> on type
// //     type.scrollTo(aInScreen.getBoundingClientRect().left,0);
// //
// //
// //
// //     //scroll same <a> in target in middle of SCREEN
// //     //make target visible and type invisible
// //     //scroll vertical with eyes
// //   }
// //
// //
// // // console.log('this is aInScreen: ', aInScreen);
// // })
//
// }
// // ----- functions ------
//
// function gradeText(results){
//   //adds hover event listener for each word
//   var wordsArray = selectAll('.word'); //array of all .word class
//   // console.log('this is wordsArray: ', wordsArray);
//   lastWord = 0;
//   for (let c_idx = 0; c_idx < results[0].words.length; c_idx++) {
//
//     results[0].words[c_idx].addEventListener("mouseover", function(e) {
//     //add the click event listener that will trigger the following:
//
//       //1. get the current word's index number
//       styleVal = getComputedStyle(e.target, 'style');
//       thisWord = (int(styleVal.getPropertyValue('--word-index')));
//
//       //2. cleans up the grades from text - MAYBE MAKE MORE EFFICIENT
//       if (lastWord > 0) {
//       for (let i = lastWord - 1; i < lastWord + 3; i++){
//        wordsArray[i].style('font-weight' ,400);
//       }
//     }
//
//       //3. grades the text where hovered
//         wordsArray[thisWord - 1].style('font-weight' ,600);
//         wordsArray[thisWord].style('font-weight' ,700);
//         wordsArray[thisWord + 1].style('font-weight' ,600);
//         wordsArray[thisWord + 2].style('font-weight' ,500);
//
//         lastWord = thisWord
//       })
//   }
// }
