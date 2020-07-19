
function myPress(n){
    myCalc.display.value += n;
}

function clearT(){
    myCalc.display.value = '';
}
function equalT(){
    myCalc.display.value = eval(myCalc.display.value);
}
function clearB(){
   var currentValue = myCalc.display.value;
   myCalc.display.value = currentValue.substring(0, currentValue.length-1);
}

function fnsin(){ 
    myCalc.display.value = Math.sin(myCalc.display.value);
};
function fncos(){ 
    myCalc.display.value = Math.cos(myCalc.display.value);
};
function fntan(){ 
    myCalc.display.value = Math.tan(myCalc.display.value);
};
function fnsqrt(){ 
    myCalc.display.value = Math.pow(myCalc.display.value, 2);
};
function fnsqrtd(){ 
    myCalc.display.value = Math.pow(myCalc.display.value, 1/2);
};

// function reset(){
    
// }