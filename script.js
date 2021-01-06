var logList = [];

function scaleFontSize() {
    var container = document.getElementById("numberField");
    
    if (container.innerHTML.length < 5) {
        container.style.fontSize = "35vw";
    } else if (container.innerHTML.length == 5) {
        container.style.fontSize = "30vw";
    } else if (container.innerHTML.length == 6) {
        container.style.fontSize = "25vw";
    } else if (container.innerHTML.length == 6) {
        container.style.fontSize = "20vw";
    } else if (container.innerHTML.length == 7) {
        container.style.fontSize = "22vw";
    } else if (container.innerHTML.length == 8) {
        container.style.fontSize = "20vw";
    } else if (container.innerHTML.length == 9) {
        container.style.fontSize = "18vw";
    } else if (container.innerHTML.length == 10) {
        container.style.fontSize = "16vw";
    } else if (container.innerHTML.length == 11) {
        container.style.fontSize = "13vw";
    } else{
        container.style.fontSize = "10vw";
    }
}

document.getElementById("toVal")
     .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
         document.getElementById("button").click();
    }
});

document.getElementById("fromVal")
     .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
         document.getElementById("button").click();
    }
});

document.getElementById("toVal")
     .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 46) {
         document.getElementById("rstButton").click();
    }
});

document.getElementById("fromVal")
     .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 46) {
         document.getElementById("rstButton").click();
    }
});



function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    let rand = array[0] / (0xffffffff + 1);
    return Math.floor(rand * (max - min + 1)) + min;
  }
  
function rand() {
    var min = document.getElementById("fromVal").value;
    var max = document.getElementById("toVal").value;

    var randNum = getRndInteger(min, max);
    let abs = Math.abs(min - max);

    let counter = 0;

    if (abs > 1000){
        for (let index = 0; index < logList.length && counter < 1000000; index++, counter++) {
            if (Math.abs(randNum - logList[index]) < 10){
                randNum = getRndInteger(min, max);
                index = -1;
            }
        }
    }

    logList.push(randNum);
    document.getElementById("numberField").innerHTML = randNum;
    document.getElementById("log").innerHTML = logList.toString();
    scaleFontSize();
 }

 function reset(){
     logList = [];
     document.getElementById("log").innerHTML = logList.toString();
     document.getElementById("numberField").innerHTML = "";
     document.getElementById("fromVal").value = "";
     document.getElementById("toVal").value = "";
 }