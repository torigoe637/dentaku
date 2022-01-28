let result = document.getElementById("result");


function input(e){
 let value = e.value;


 if(result.value == ""){
 if(value == "=" || value == "00" || value == "." || value == "/" || value == "*" || value == "-" || value == "+"){
   value = "";
   } 
  }


 if(result.value == "0"){
  if (value == "0" || value == "00" || value == "/"){
   value = "";
  } else if (value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" || value == "9"){
   result.value = "";
  }
 }


 if(value == "AC"){
  result.value = "0";
 }

 else if(result.value.slice(-1) == "+" || result.value.slice(-1) == "-"  || result.value.slice(-1) == "*"){
  if(value == "+" || value == "-" || value == "*" || value == "/"){
   result.value = result.value.substr(0, result.value.length - 1) + value;
  } else if(value == "00" || value == "." || value == "=") {
   value = "";
  } else { 
   result.value += value;
  }
 }

 else if(result.value.slice(-1) == "/"){
  if(value == "+" || value == "-" || value == "*" || value == "/"){
   result.value = result.value.substr(0, result.value.length - 1) + value;
  } else if(value == "0" || value == "00" || value == "." || value == "=") {
   value = "";
  } else {
   result.value += value;;
  }
 }

 else if(result.value.slice(-1) == "."){
  if(value == "." || value == "+" || value == "-" || value == "*" || value == "/"){
   value = "";
  } else {
   result.value += value;
  }
 }

 else if(value == "="){
  result.value = eval(result.value);
 }

 else{
  result.value += value;
 }
 
}