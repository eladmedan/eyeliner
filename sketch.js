
var string;
var maxSpeed;
var pos;
var type;

function preload(){
  string = loadStrings('assets/test.txt');
}

function setup() {

  $(document).ready(function() {
    // var string;
    var type;


    frameRate(120);

    var chapter = select('#target'); //selects the div that sets the text in an invisible column as a variable

    //places the text file into a div with a span with id for every paragraph in it
    makeParagraphs(chapter)

    const target = document.querySelector('#target'); //integer for splitting.js defenitions

    var results = Splitting({ target: target, by: 'words' }); //the pointer array for each word and line in the text

    gradeText(results); //creats the grade effect upon hover

  });


}

var pos = 0; //reset the looping scroll position integer
var maxSpeed = 7; //sets the maximum scroll speed

function draw() {

  if (mouseX < 0.49 * windowWidth) {
  move = map(mouseX, 0, 0.49 * windowWidth, maxSpeed, 0);
  } else if (mouseX > 0.51 * windowWidth) {
    move = map(mouseX, 0.51 * windowWidth, windowWidth, 0, -maxSpeed);
  } else move = 0;

  pos = pos - move;
  // scrollingText(maxSpeed); //sets the scrolling speed according to gaze X location in screen

  target.scrollTo({ //scrolls
  top: 0,
  left: pos,
  behavior: 'auto'
  });

  // for (let a_idx = 0; a_idx < 81; a_idx++) {
  //   aX = document.querySelector('#row'+a_idx.toString()).getBoundingClientRect().left;
  //   if ((aX > ((windowWidth-windowHeight)/2)) && (aX <((windowWidth-windowHeight)/2)+windowHeight)) {
  //     var aInScreen = document.querySelector('#row'+a_idx.toString());
  //   }
  // }

//   document.addEventListener('keyup', event => {
//   if (event.code === 'Enter') {
//     console.log('enter hold')
//     //scroll to next <a> on type
//     type.scrollTo(aInScreen.getBoundingClientRect().left,0);
//   //
//   //
//   //
//   //   //scroll same <a> in target in middle of SCREEN
//   //   //make target visible and type invisible
//   //   //scroll vertical with eyes
//   }
//
//
// // console.log('this is aInScreen: ', aInScreen);
// })
}

// ----- functions ------


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

function makeParagraphs(chapter){
  for (let p_idx = 0; p_idx < string.length; p_idx++) {
    var paragraph = createElement('span',string[p_idx])
    console.log('this is paragraph: ', paragraph);
    paragraph.elt.setAttribute('id','par'+p_idx.toString());
    chapter.elt.appendChild(paragraph.elt);
  }
}


function scrollingText(maxSpeed){
  if ((mouseX > 0.49 * windowWidth) && (mouseX < 0.5 * windowWidth)) {
  move = map(mouseX, 0.5 * windowWidth, 0.49 * windowWidth, 0.5 * maxSpeed, maxSpeed);
  } else if ((mouseX < 0.49 * windowWidth) && (mouseX > (windowHeight - windowWidth)/2)) {
    move = map(mouseX, 0.49 * windowWidth, (windowHeight - windowWidth)/2, maxSpeed, 1.5 * maxSpeed);
  } else {
    move = 0;
  }

  pos = pos - move;
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
