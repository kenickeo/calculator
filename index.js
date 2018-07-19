function round(number){

   var decimal = 3;
   var store = [];
   var combine = '';
    
    if(number.indexOf('.') !== -1){
        
      var firstHalf = number.slice(0, number.indexOf('.') + 1);
      var secondHalf = number.slice(number.indexOf('.') + 1, number.length);

    }else{

      return number;
    }
       
       secondHalf.split('');

   for (var i = 0; i < decimal; i++) {
       
       if(secondHalf[i] == '0'){

            decimal++;
            store[i] = secondHalf[i];

       } else{

            store[i] = secondHalf[i];

       }
        

   }

   var join = store.join('');

   combine = firstHalf.concat(join);

   return combine;

}

function Display() {

var digit = '';
var result = '';
var oper = '';
var operBol = Boolean;
var number = [];
var equation = [];
var numPlusOper = '';
var btnValue = '';
var clearEnd = Boolean;

$('.btnshell').on('click', function(){



btnValue = $( this ).attr('value');
 

if((btnValue == '1' || btnValue == '2' || btnValue == '3' || btnValue == '4' || btnValue == '5' || btnValue == '6' || btnValue == '7' || btnValue == '8' || btnValue == '9') && number.length < 18 && equation.length < 20){
    
        digit = btnValue;

   if(number[0] == '0' && number[1] !== '.'){

    number[0] = '';
    
   }
  
    number.push(digit);
    equation.push(digit);
   $('#adjDis').html(number);
   $('#equation').html(equation);
   operBol = true;
   

}else if((btnValue == '.' && number.indexOf('.') == -1) && number.length < 18 && equation.length < 20){

        digit = btnValue;

   if(number[0] == undefined){

    number[0] = '0';
    number[1] = digit;
    equation.push('0');
    equation.push(digit);
    

   }else{

    number.push(digit);
    equation.push(digit);
    
   }
  
    
   $('#adjDis').html(number);
   $('#equation').html(equation);
   operBol = true;
   

  }

if((btnValue == '0' && number[0] !== undefined) && number.length < 18 && equation.length < 20){

        digit = btnValue;

   number.push(digit);
   equation.push(digit);
   $('#adjDis').html(number);
   $('#equation').html(equation);
   operBol = true;
   
  

}

if((btnValue == '*' || btnValue == '/' || btnValue == '-' || btnValue == '+') && operBol == true && equation.length < 20){
      
        oper = btnValue;

      oper = btnValue;
      numPlusOper = number.join('') + oper;
      result += numPlusOper;
      btnValue = '';
      number = [];
      equation.push(oper);
      $('#equation').html(equation);
      operBol = false;
      
      
}

    if(btnValue == '='){
      
      var equal = result + number.join('');
      var evaluated = eval(equal).toString();
      var rounded = round(evaluated);
     $('#adjDis').html(rounded);
     operBol = true;
    }
    
     if(btnValue == 'ce'){

      for (var i = 0; i < number.length; i++) {
        equation.pop();
      }

      digit = '';
      number = [];

      $('#adjDis').html('0');
      $('#equation').html(equation);
       operBol = false;
      
      }


    if(btnValue == 'c'){
      
      digit = '';
      oper = '';
      number = [];
      result = '';
      numPlusOper = '';
      equation = [];
      $('#adjDis').html('0');
      $('#equation').html('');
       operBol = false;

    }

});


}

$(document).ready(function(){

Display();


});

