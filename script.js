let input = document.getElementById('display');

function selectNum(x){
   input.value += x;
}

function calculate(){
   let x = input.value;
   let y = eval(x);
   input.value = y;
}
function clearValue(){
   input.value = '';
}
