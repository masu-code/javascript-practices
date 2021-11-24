export class Input {
  //vars declarations
  value = undefined;
  obj = undefined;
  static isString() {
    return isNaN(this.value);
  }
  static set setObj(Obj) {
    this.Obj = Obj;
  }
  static set setValue(value) {
    this.value = value;
  }
  static get getLength() {
    return this.value.length;
  }
  static printLength(inputId) {
    document.getElementById("result").innerHTML = MyInput.getLength;
  }
}

export function modifyHTMLValue(objId, value) {
  document.getElementById(objId).innerHTML = value;
}

export function changeColor(id, color){
  document.getElementById(id).style.color = color;
}
