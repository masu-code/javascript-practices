import {changeColor, Input, modifyHTMLValue} from "./classes-methods/input-output-manipulation.js";
/* variables declaration */
let inputIdN1 = "input-n-1";
let resultIdN1 = "result-n-1";
/* First exercise */
document.getElementById(inputIdN1).addEventListener("keydown", function (event){
    if (event.key == 'Enter') {
        Input.setValue = document.getElementById(inputIdN1).value;
        if(Input.isString(Input.value)){
            changeColor(resultIdN1, "black");
            modifyHTMLValue(resultIdN1, Input.getLength);
        }
        else{
            changeColor(resultIdN1, "red");
            modifyHTMLValue(resultIdN1, "Introduce una cadena de texto, por favor!");
        }
    }
});
