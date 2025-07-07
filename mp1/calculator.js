/* ------------ mini-calculator logic ------------ */

function readVals() {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  return [a, b];
}

function display(res) {
  const out = document.getElementById('output');
  out.innerHTML = String(res);
  /* highlight negatives */
  const red = res < 0;
  out.style.color = red ? 'red' : '';
}

function calc(op) {
  const [a, b] = readVals();
  let r = 0;
  if      (op === '+') r = a + b;
  else if (op === '-') r = a - b;
  else if (op === '*') r = a * b;
  else if (op === '/') r = b === 0 ? '∞' : a / b;
  display(r);
}

/* power: a^b using a for-loop */
function power() {
  const [a, b] = readVals();
  let result = 1;
  for (let i = 0; i < b; i++) result *= a;
  display(result);
}

function clearCalc() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('output').innerHTML = '';
}