import {isString, getObj, getValue, modifyHTMLValue, changeColor} from "./classes-methods/input-output-manipulation.js";
/* First exercise */

/* Variables declaration */
let e1InputTextId = "e1-input-text";
let e1InputTextValue = "";
let e1InputTextObj = getObj(e1InputTextId);
let e1PResultId = "e1-p-result";

e1InputTextObj.addEventListener("keydown", function (event){
    if (event.key == 'Enter') {
        e1InputTextValue = getValue(e1InputTextId)
        if(isString(e1InputTextValue)){
            changeColor(e1PResultId, "black");
            modifyHTMLValue(e1PResultId, e1InputTextValue.length);
        }
        else{
            changeColor(e1PResultId, "red");
            modifyHTMLValue(e1PResultId, "Introduce una cadena de texto, por favor!");
        }
    }
});
/* Second exercise */

/* Variables declaration */
let e2InputTextId = "e2-input-text";
let e2InputNumberId = "e2-input-number";
let e2PResultId = "e2-p-result";
let e2ButtonCutObj = document.getElementById("e2-button-cut");


document.getElementById(e2InputTextId).addEventListener("keydown", function (event){
    Input.setObj = document.getElementById(e2InputNumberId);
    Input.setValue = document.getElementById(e2InputNumberId).value;
    if (event.key == 'Enter' && Input.value == "") {
        Input.obj.focus();
    } else {

    }
});

