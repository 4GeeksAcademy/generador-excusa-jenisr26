let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
let action = ["comió", "orinó", "aplastó", "rompió"];
let what = ["mi tarea", "mi teléfono", "el coche"];
let when = [
  "antes de la clase",
  "cuando dormía",
  "mientras hacía ejercicio",
  "durante el almuerzo",
  "mientras oraba"
];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  document.getElementById("excuse").textContent = excuse;
}
window.onload = generateExcuse;
