//v is always 'value'
export let modifyHTMLValue = (id, v, color) =>{
  document.getElementById(id).innerHTML = v;
  document.getElementById(id).style.color = color;
}
export let cut = (value, size) => value.substring(0, size);
export let separateByCharacter = (text, char) => text.split(char);
export let getObj = id => document.getElementById(id);
export let reverseAText = text => text.split("").reverse().join("");
export let isString = v => isNaN(v);
export let getValue = id => document.getElementsByName(id).value;
export let getRandom = (min, max) => Math.round((Math.random() * (max - min + 1)) + min);
export let isBinary  = number => /^[01]+$/.test(number);
export let validatesEmail = email =>   /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
export let validatesName = name => /^\w+ \w+$/.test(name);

export let countWordsInAnArray = arr =>{
  let count,
  repeatedWords = {},
  countedWordsCount = 0,
  countedWords = [];

  for (let index = 0; index < arr.length; index++) {
    count = 1;
    if (countedWords.includes(arr[index])) {continue;} //validates the element is not counted
    countedWordsCount++;                               //Set the countedWords array position
    countedWords[countedWordsCount] = arr[index];                  //add the word to "counted section class = "col fade-in"" 
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

export let getFactorial = number =>{
  let result = 1;
  if(number == 1) return result;          //validates if the number is 1
  for (let i = 1; i <= number; i++) {
    result = i * result;
  }
  return result;
}

export let isCousinPrime = number =>{
  for (let i = number - 1; i > 1; i--) {
    if(number%i == 0) {return false;} 
  }
  return true;
}

export let binaryToDecimal = (number) =>{
  let arr = number.split("").reverse(),
  result = 0;

      for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "0") continue;
        result += 2 ** i;
      }
      return result;
}

export let decimalToBinary = (number) => {
  let divNumber = [],
  result = [];
  for (let i = 0; number > 0; i++) {
    divNumber[i] = number;
    number = Math.floor(number / 2);
  }
  divNumber = divNumber.reverse();
  for (let i = 0; i < divNumber.length; i++) {
    result[i] = divNumber[i]%2 == 0 ? 0 : 1;
  }
  result = result.join();
  return result.replace(/,/g, "");
}

export let howMuchTimeHasPassed =(year, month, day) =>{
    let birthDayInMs = new Date(year, month - 1, day).getTime(),
    yearsInMs = 1000 * 60 * 60 * 24 * 365,    //I need to divide the passed time in ms by this to get the time in years
    currentTimeInMs = new Date().getTime(),
    passedTime = currentTimeInMs - birthDayInMs; //To get the passed time in ms
    return Math.floor(passedTime / yearsInMs);    //Return the rounded date :)
}

export let countVowelsAndConsonants = text =>{
    let vowelsObj = text.match(/[aeiou]/g),
    vowelsCount =  vowelsObj !== null ? vowelsObj.length : 0,
    consonantsObj = text.match(/[bcdfghjklmnñpqrstvwxyz]/g),
    consonantsCount =  consonantsObj !== null ? consonantsObj.length : 0;
    return `Número de vocales: ${vowelsCount}, número de consonantes: ${consonantsCount}`;
}

export let addElementsToArray = (inputObj, index, arr) =>{
  let inputValue = inputObj.value;
  arr[index] = inputValue;
  return arr;
}

export let toSeparateByoddEven = arr =>{
  let num = {
    even: [],
    odd: []
  }

  arr.forEach(element =>{
    element % 2 == 0
    ? num.even.push(element) 
    : num.odd.push(element);
  });
  
  return num;
}