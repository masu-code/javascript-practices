//v is always 'value'
export let modifyHTMLValue = (id, v, color) =>{
  document.getElementById(id).innerHTML = v;
  document.getElementById(id).style.color = color;
}
export let cut = (value, size) => value.substring(0, size);
export let separateByCharacter = (text, char) => text.split(char);
export let getObj = id => document.getElementById(id);
export let reverseAText = text => text ? text.split("").reverse().join("") : "Ingresa texto por favor!";
export let isString = v => isNaN(v);
export let reverseText = text => text.split("").reverse().join("");
export let getValue = id => document.getElementsByName(id).value;

export let countWordsInAnArray = arr =>{
  let count,
  repeatedWords = {},
  countedWordsCount = 0,
  countedWords = [];

  for (let index = 0; index < arr.length; index++) {
    count = 1;
    if (countedWords.includes(arr[index])) {continue;} //validates the element is not counted
    countedWordsCount++;                               //Set the countedWords array position
    countedWords[countedWordsCount] = arr[index];                  //add the word to "counted section" 
    if (index == arr.length) {                                     //Validates if is the last element -it is understood that is lonely-
      repeatedWords[arr[index]] = `${arr[index]}: ${count}. `;
      continue;
    }
    if((index + 1) == arr.length){                                 //validates if is only one element
      repeatedWords[arr[index]] = `${arr[index]}: ${count}. `;
      break;
    }
    for (let index2 = index + 1; index2 < arr.length; index2++) {  //Compare element with all other next elements
      if (arr[index] == arr[index2]) {
        repeatedWords[arr[index]] = `Hay ${++count} ${arr[index]}. `;
        continue;
      }    
    }
    repeatedWords[arr[index]] = `${arr[index]}: ${count}. `;      //If nothing of up happens then, is an one word in the middle
  }

  return repeatedWords;
}
 
export let printObjProperties = (obj, idResult) => {
  let p = document.createElement("p"),                  
  value,                                                
  result = getObj(idResult);
    Object.keys(obj).forEach(element => {           //Iterates for each propertie of the object
    value = document.createTextNode(obj[element]);  //make the current propertie value in a "text node"
    p.appendChild(value);                           //Add the value to "p"
    });                                             //When the forEach ends, the element p has all the properties values
  result.innerHTML = p.innerHTML;                   //Equals both inner HTML
  p.innerHTML = "";                                 //Reset the p value, this is to print the output always in the same line!
}
