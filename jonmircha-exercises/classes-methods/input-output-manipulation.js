export class Input{
    //vars declarations
    value = undefined;
    obj = undefined;
    static isString() {
      if (isNaN(this.Value)) {
        return true;
      } else {
        return false;
      }
    }
    static set setObj(Obj) {
      this.Obj = Obj;
    }
    static set setValue(inputValue) {
      this.Value = Value;
    }
    static get getLength() {
      return this.input.length;
    }
    static printLength(inputId) {
      document.getElementById("result").innerHTML = MyInput.getLength;
    }
  }

    export function modifyHTMLValue(objId, value){
        document.getElementById(objId).innerHTML = value;
    }