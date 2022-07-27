var currentNumberwrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function decrement(){
    currentNumber = currentNumber -1;
    currentNumberwrapper.innerHTML = currentNumber;
}

function increment(){
    currentNumber = currentNumber +1;
    currentNumberwrapper.innerHTML = currentNumber;
}