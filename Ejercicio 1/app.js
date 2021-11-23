class MyInput{
    static isString() {
      if (isNaN(this.input)) {
        return true;
      } else {
        return false;
      }
    }
  
    static set setInput(input) {
      this.input = input;
    }
    static get getLength() {
      return this.input.length;
    }
  }

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

