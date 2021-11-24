import MyInput from "./MyInput.js";

function printResult(event){
  if(event.key == 'Enter'){
    MyInput.setInput = document.getElementById("input").value;
    if (MyInput.isString()) {
        document.getElementById("result").innerHTML = MyInput.getLength;
   
    } else {
      document.getElementById("result").innerHTML = "Por favor, inserta una cadena de texto";
    }
  }
    
        
}

let keyReader = document.getElementById("input");
keyReader.addEventListener("keydown", printResult);

