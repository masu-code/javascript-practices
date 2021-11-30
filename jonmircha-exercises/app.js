import {
  isString,
  getObj,
  modifyHTMLValue,
  cut,
  separateByCharacter,
  reverseAText,
  countWordsInAnArray,
  printObjProperties,
  getRandom,
  getFactorial,

} from "./classes-methods/input-output-manipulation.js";
//to study
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};

const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScoll
) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScoll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});

//Exercise 1
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
//Exercise 2
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
//Exercise 3
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
//Exercise 5
{
  //Variables declaration
  let e5InputTextObj = getObj("e5-input-text");
  let e5ButtonReverseObj = getObj("e5-button-reverse");
  let resultId = "e5-p-result";
  let inputValue;

  e5InputTextObj.addEventListener("keydown", event => {if (event.key == 'Enter') e5ButtonReverseObj.focus()}); //if press Enter in the input, go to button
  e5ButtonReverseObj.addEventListener("keydown", event => {if(event.key == 'Enter') e5InputTextObj.focus()});  //if you press Enter in button, go to input
  e5ButtonReverseObj.addEventListener("click", () => {                  
    inputValue = e5InputTextObj.value;                                                        //Assigns the value of the input in a var
    if(!inputValue) return modifyHTMLValue(resultId, "Ingresa un texto por favor!", "red");   //if is empty
    if(!isNaN(inputValue)) return modifyHTMLValue(resultId, "No se aceptan números", "red");  //if is a number
    modifyHTMLValue(resultId, reverseAText(inputValue), "green");                             //else
  });
}
//Exercise 6
{
  //variable declaration
  let e6ButtonCountId = "e6-button-count",
  e6PResultId = "e6-p-result",
  e6InputTextId = "e6-input-text",
  e6ButtonCountObj = getObj(e6ButtonCountId),
  text;
  
  e6ButtonCountObj.addEventListener("click", () =>{
    text = document.getElementById(e6InputTextId).value
    text = text.replace(/[^a-zA-Z ]/g, "");
    text = separateByCharacter(text, " ");
    text = countWordsInAnArray(text);
    printObjProperties(text, e6PResultId);
  });
}   
//Exercise 7
{
  //variable declaration
  let e7InputTextObj = getObj("e7-input-text"),
  e7ButtonObj = getObj("e7-button-check");

  e7ButtonObj.addEventListener("click", () =>{
    e7InputTextObj.value == reverseAText(e7InputTextObj.value) ? modifyHTMLValue("e7-p-result", true, "green") : modifyHTMLValue("e7-p-result", false, "red"); 
  });
}
//Exercise 8
{
  //variable declaration
  let e8InputTextObj = getObj("e8-input-text"),
  e8ButtonDeleteObj = getObj("e8-button-delete"),
  text, character, cleanText,
  e8InputCharacterObj = getObj("e8-input-character"),
  regexp;

  e8ButtonDeleteObj.addEventListener("click", () =>{
    character = e8InputCharacterObj.value;
    text = e8InputTextObj.value;
    regexp = new RegExp(character, 'g');
    cleanText = text.replace(regexp, "");
    character && text ? modifyHTMLValue("e8-p-result", cleanText) : modifyHTMLValue("e8-p-result", "Ingresa ambos valores por favor", "red");
  })
  
}
//Exercise 9
{
  let e9Button = getObj("e9-button");

  e9Button.addEventListener("click", () =>{
    modifyHTMLValue("e9-result", getRandom(501, 600), "green");
  });
}
//Exercise 10
{
  let e10InputObj = getObj("e10-input"),
  e10ResultId = "e10-result";
  getObj("e10-button").addEventListener("click", ()=>{
    e10InputObj.value == reverseAText(e10InputObj.value) ? modifyHTMLValue(e10ResultId, true, "green") : modifyHTMLValue(e10ResultId, false, "red"); 
  });
}
//Exercise 11
{
  let e11ButtonObj = getObj("e11-button"),
  e11InputObj = getObj("e11-input");
  e11ButtonObj.addEventListener("click", () =>{
    modifyHTMLValue("e11-result", getFactorial(e11InputObj.value), "green"); //You can not call a function that returns an object and then put it .value
  });
}