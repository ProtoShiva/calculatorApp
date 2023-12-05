let calculation = '';
let lastKeyIsOperator = false;
let decimalAdded = false;
$('.btn').on('click', (event)=>{
  let userInput = event.target.innerText;
  if(userInput === '.' && decimalAdded){
    return;
  }

  if('+-x/'.includes(userInput)){
    if(lastKeyIsOperator){

      initialValue = calculation;
      updatedValue = initalValue.substring(0, initalValue.length - 1) + userInput;
      calculation = updatedValue;
      return;
    }
    lastKeyIsOperator = true;
    decimalAdded = false;
  }

   else {
      lastKeyIsOperator = false;

      if(userInput=== '.'){
        decimalAdded = true;
      }
  }
  updateCalculation(userInput);
});

$('.equal-btn').on('click',()=>{
    calculation = calculation.replace(/x/g, '*');
    calculation = eval(calculation).toString();
    displayCalculation();
  });


$('.reset-btn').on('click',()=>{
  calculation = '';
  displayCalculation();
});

$('.del-btn').on('click',()=>{
  calculation = calculation.slice(0,-1);
  displayCalculation();
});

function updateCalculation(value){  
     calculation += value;
     displayCalculation();
  }
 

function displayCalculation(){
  $('.numbers').text(calculation);
}

