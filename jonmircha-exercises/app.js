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
  isCousinPrime,
  binaryToDecimal,
  decimalToBinary,
  isBinary,
  howMuchTimeHasPassed,
  countVowelsAndConsonants,
  validatesEmail,
  validatesName,
  addElementsToArray,
  toSeparateByoddEven
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
//Exercise 12
{
  let e12ButtonObj = getObj("e12-button"),
  e12InputObj = getObj("e12-input"),
  e12ResultId = "e12-result";

  e12ButtonObj.addEventListener("click", () => isCousinPrime(e12InputObj.value) ? modifyHTMLValue(e12ResultId, true, "green") : modifyHTMLValue(e12ResultId, false, "red"));
}
//Exercise 15
{
  let e15ButtonObj = getObj("e15-button"),
  e15InputObj = getObj("e15-input"),
  e15SelectObj = getObj("e15-select"),
  e15ResultId = "e15-result";

    e15ButtonObj.addEventListener("click", () =>{
      //if empty
      if(e15InputObj.value == "") return modifyHTMLValue(e15ResultId , "Tienes que llenar el espacio", "red");

      //Binary to Decimal case
      if(e15SelectObj.value == "Binario a Decimal"){
        //is the input binary?
        if(!isBinary(e15InputObj.value)) return modifyHTMLValue(e15ResultId , `${e15InputObj.value} no es un número binario`, "red");
        //else    
        modifyHTMLValue(e15ResultId , binaryToDecimal(e15InputObj.value), "green");
      } 

      //Decimal to Binary case
      if(e15SelectObj.value == "Decimal a Binario")  modifyHTMLValue(e15ResultId, decimalToBinary(e15InputObj.value), "green");
  });
}
//Exercise 17
{
  let e17Button = getObj("e17-button"),
  e17InputYear = getObj("e17-input-year"),
  e17InputMonth = getObj("e17-input-month"),
  e17InputDay = getObj("e17-input-day");

  e17Button.addEventListener("click", () => {
    modifyHTMLValue("e17-result", howMuchTimeHasPassed(e17InputYear.value, e17InputMonth.value, e17InputDay.value), "green");
  }
  );  
}
//Exercise 18
{
  let e18ButtonObj = getObj("e18-button"),
  e18InputObj = getObj("e18-input");
  
  e18ButtonObj.addEventListener("click", () => {
    e18InputObj.value !== "" ? modifyHTMLValue("e18-result", countVowelsAndConsonants(e18InputObj.value), "green") : modifyHTMLValue("e18-result", "Ingresa una cadena!", "red");
  });
}
//Exercise 19
{
  let e19ButtonObj = getObj("e19-button"),
  e19InputObj = getObj("e19-input");
  
  e19ButtonObj.addEventListener("click", () =>{
    validatesName(e19InputObj.value) 
    ? modifyHTMLValue("e19-result", validatesName(e19InputObj.value), "green") 
    : modifyHTMLValue("e19-result", validatesName(e19InputObj.value), "red");
  });
}
//Exercise 20
{
  let e20ButtonObj = getObj("e20-button"),
  e20InputObj = getObj("e20-input");


  e20ButtonObj.addEventListener("click", () =>{
    validatesEmail(e20InputObj.value) 
    ? modifyHTMLValue("e20-result", validatesEmail(e20InputObj.value), "green") 
    : modifyHTMLValue("e20-result", validatesEmail(e20InputObj.value), "red");
  });
}
//Exercise 23
{
  let e23InputObj = getObj("e23-input"),
  e23ButtonAddObj = getObj("e23-button-add"),
  e23ButtonEvaluateObj = getObj("e23-button-evaluate"),
  index = 0,
  arr = [],
  numObj;

  e23ButtonAddObj.addEventListener("click", ()=>{
    arr = addElementsToArray(e23InputObj, index++, arr);
    e23InputObj.focus();
    e23InputObj.value = "";
  });

  e23ButtonEvaluateObj.addEventListener("click", ()=>{
    numObj = toSeparateByoddEven(arr);
    modifyHTMLValue("e23-result", `Estos son tus números pares: ${numObj.even} <br>
    Estos son tus números impares: ${numObj.odd}`);
    console.log(numObj);
  });
}

//Exercise 24
{
  let e24InputObj = getObj("e24-input"),
  e24ButtonAddObj = getObj("e24-button-add"),
  e24ButtonSortObj = getObj("e24-button-evaluate"),
  index = 0,
  arr = [],
  numObj;

  e24ButtonAddObj.addEventListener("click", ()=>{
    if(e24InputObj.value != "") arr = addElementsToArray(e24InputObj, index++, arr);
    e24InputObj.focus();
    e24InputObj.value = "";
  });

  e24ButtonSortObj.addEventListener("click", ()=>{
    modifyHTMLValue("e24-result", `En orden ascendente: ${arr.sort((a, b)=>a-b)} <br> En orden descendente: ${arr.sort((a, b)=>b-a)}`);
  });}
