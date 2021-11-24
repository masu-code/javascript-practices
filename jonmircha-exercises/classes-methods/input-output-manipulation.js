//v is always 'value'
export function isString(v) {
  return isNaN(v);
}
export function getObj(id){
  return document.getElementById(id);
}
export function modifyHTMLValue(id, v, color) {
  document.getElementById(id).innerHTML = v;
  document.getElementById(id).style.color = color;
}
export function cut(value, size){
    return value.substring(0, size);
}

