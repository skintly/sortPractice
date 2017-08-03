/*
Written by: Jeremy O'Byrne
Date created: July 25th, 2017
Summery:This is a practice exercise focused on DOM interaction and an environment I can practice my sort Algorithms 
        also, a small job to test out visual Studio Code. 
IDE: Visual Studio Code
Added extensions during writing: Beautify 1.1.1, Code Spellchecker 1.3.2
@todo benchmark tool to measure processing time of sort Algorithms
*/

document.getElementById("randomize").addEventListener("click", randomize);
document.getElementById("bubbleSort").addEventListener("click", bubbleSortGrid);


function getIdArray(){
  return document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8"); 
}

//@todo learn more sort algorithms
function bubbleSort(a) { //my first bubble sort. 
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}


function randomize() { //put a random number into each box to be later sorted
  console.log("rand run");
 var allElements = getIdArray();
  for (var i = 0; i < allElements.length; ++i) {
    var el = allElements[i];
    var randNumber = Math.floor((Math.random() * 100) + 1);
    var text = document.createTextNode(randNumber);
      el.innerHTML = ""; //clears any existing content
      el.appendChild(text);
    
  }
}

function bubbleSortGrid() {
  var allElements = getIdArray();
  var numArr = [];
  for (var i = 0; i < allElements.length; i++) {
    var el =parseInt(allElements[i].textContent);
    numArr.push(el);
  }

  console.log("unsorted --> " + numArr);
  bubbleSort(numArr);
  console.log("sorted -->  " + numArr);
  
  for (var i = 0; i < allElements.length; ++i) {
    var el = allElements[i];
    var sortedNum = document.createTextNode(numArr[i]);
    if (el.className) {
      el.innerHTML = ""; //clears any existing content
      el.appendChild(sortedNum);
    }
  }
}