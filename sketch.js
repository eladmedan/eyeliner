//THIS CODE MOVES THE STRING ACCORDING TO HORIZONTAL MOUSE LOCATION - CLOSER TO AN EDGE >> TEXT MOVES AWAY FROM THAT EDGE

//stuff to remember:

//first define variabes, in setup give them values and then you can use them in draw etc.

//windowWidth & windowHeight are native variables for the size of the browser window or setion window

//createElement is a function that creates a HTML object by it's tag (p for ex.) and it's content

//x.position is a function that influences x's location on the browser window

// window.saveDataAcrossSessions = true;

var content;
// var pos;
// var xprediction,yprediction;


function setup() {
  frameRate(120);
//     webgazer.setGazeListener(function(data, elapsedTime) {
//     if (data == null) {
//         return;
//     }
//      xprediction = data.x; //these x coordinates are relative to the viewport 
//      yprediction = data.y; //these y coordinates are relative to the viewport
//     console.log("xprediction",xprediction);
//     console.log("yprediction",yprediction);

//     //elapsed time is based on time since begin was called
// }).begin();
// frameRate(120);
  pos = 0.5 * windowWidth - 78148;
  
  maxSpeed = 10;
  
  content = select('#target');
  
  content.style('white-space', 'nowrap');
  
  // let contentWidth = content.clientWidth;
  
      
  content.position(pos, 0.3 * windowHeight);
  
  results = Splitting(); //array of all the splits in #target
  wordsArray = selectAll('.word'); //array of all .word class

  lastWord = 0;

    //adds hover event listener for each word 
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
      
      //3. grades the text where clicked
        wordsArray[thisWord - 1].style('font-weight' ,600);
        wordsArray[thisWord].style('font-weight' ,700);
        wordsArray[thisWord + 1].style('font-weight' ,600);
        wordsArray[thisWord + 2].style('font-weight' ,500);
       
        lastWord = thisWord
      })
  }
      
      
      
  

}

function draw() {
  if (mouseX < 0.45 * windowWidth) {
  move = map(mouseX, 0, 0.45 * windowWidth, maxSpeed, 0);
  } else if (mouseX > 0.55 * windowWidth) {
    move = map(mouseX, 0.55 * windowWidth, windowWidth, 0, -maxSpeed);
  } else move = 0;  
  
  pos = pos + move;
  content.position(pos, 0.3 * windowHeight);
}
