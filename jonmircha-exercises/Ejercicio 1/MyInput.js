export default class {
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