import {
  isString,
  getObj,
  modifyHTMLValue,
  cut,
  separateByCharacter,

} from "./classes-methods/input-output-manipulation.js";
/* First exercise */
{
  /* Variables declaration */
  let e1InputTextId = "e1-input-text";
  let e1InputTextObj = getObj(e1InputTextId);
  let e1PResultId = "e1-p-result";

  e1InputTextObj.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      if (isString(e1InputTextObj.value)) {
        modifyHTMLValue(e1PResultId, e1InputTextObj.value.length, "black");
      } else {
        modifyHTMLValue(
          e1PResultId,
          "Introduce una cadena de texto, por favor!",
          "red"
        );
      }
    }
  });
}
/* Second exercise */
{
  /* Variables declaration */
  let e2InputTextId = "e2-input-text";
  let e2InputNumberId = "e2-input-number";
  let e2PResultId = "e2-p-result";
  let e2ButtonCutId = "e2-button-cut";
  let e2InputTextObj = getObj(e2InputTextId);
  let e2InputNumberObj = getObj(e2InputNumberId);
  let e2ButtonCutObj = getObj(e2ButtonCutId);

  e2InputTextObj.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && e2InputNumberObj.value == "") {
      e2InputNumberObj.focus();
    } else if (event.key == "Enter") {
      e2ButtonCutObj.focus();
    }
  });

  e2InputNumberObj.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && e2InputTextObj.value == "") {
      e2InputTextObj.focus();
    } else if (event.key == "Enter") {
      e2ButtonCutObj.focus();
    }
  });

  e2ButtonCutObj.addEventListener("click", function (event) {
      if (e2InputNumberObj.value != "" && e2InputTextObj.value != "") {
        if (isString(e2InputTextObj.value)) {
            if (e2InputNumberObj.value > e2InputTextObj.value.length){
                modifyHTMLValue(e2PResultId, 0, "green");
            } else {
                modifyHTMLValue(e2PResultId, cut(e2InputTextObj.value, e2InputNumberObj.value), "green");
            }   
        } else {
            modifyHTMLValue(e2PResultId, "Tienes que darme texto!", "red");
        }       
      } else {
        modifyHTMLValue(e2PResultId, "Faltan datos", "red");
      }
    });
} 
/* Exercise 3 */
{
/* Variables declaration */
let e3InputTextObj = getObj("e3-input-text");
let e3InputCharacterObj = getObj("e3-input-character");
let separatedText;
let character;

document.getElementById("e3-button-separate").addEventListener("click", function (){   //Added to button a event listener
    character = e3InputCharacterObj.value;                                             //it takes the character from the inut
    separatedText = separateByCharacter(e3InputTextObj.value, character);              //it separates the text with the character
    modifyHTMLValue("e3-p-result", separatedText);                                     //print the result 
});
}
