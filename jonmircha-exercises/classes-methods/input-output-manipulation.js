//v is always 'value'
export function isString(v) {
  return isNaN(v);
}
export function getValue(id){
  return document.getElementById(id).value;
}
export function getObj(id){
  return document.getElementById(id);
}
export function modifyHTMLValue(id, v) {
  document.getElementById(id).innerHTML = v;
}
export function changeColor(id, color) {
  document.getElementById(id).style.color = color;
}

