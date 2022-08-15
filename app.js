// https://calculator.swiftutors.com/sagitta-of-an-arc-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lengthofSagittaRadio = document.getElementById('lengthofSagittaRadio');
const radiusofArcRadio = document.getElementById('radiusofArcRadio');
const chordsBaseLengthRadio = document.getElementById('chordsBaseLengthRadio');

let lengthofSagitta;
let radiusofArc = v1;
let chordsBaseLength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

lengthofSagittaRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Radius of Arc';
  variable2.textContent = '(l) Chord\'s Base Length';
  radiusofArc = v1;
  chordsBaseLength = v2;
  result.textContent = '';
});

radiusofArcRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Length of Sagitta';
  variable2.textContent = '(l) Chord\'s Base Length';
  lengthofSagitta = v1;
  chordsBaseLength = v2;
  result.textContent = '';
});

chordsBaseLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Length of Sagitta';
  variable2.textContent = '(r) Radius of Arc';
  lengthofSagitta = v1;
  radiusofArc = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lengthofSagittaRadio.checked)
    result.textContent = `Length of Sagitta = ${computeLengthofSagitta().toFixed(2)}`;

  else if(radiusofArcRadio.checked)
    result.textContent = `Radius of Arc = ${computeRadiusofArc().toFixed(2)}`;

  else if(chordsBaseLengthRadio.checked)
    result.textContent = `Chord's Base Length = ${computeChordsBaseLength().toFixed(2)}`;
})

// calculation

function computeLengthofSagitta() {
  return Number(radiusofArc.value) - Math.sqrt(Math.pow(Number(radiusofArc.value), 2) - Math.pow(Number(chordsBaseLength.value), 2));
}

function computeRadiusofArc() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeChordsBaseLength() {
  return Math.sqrt(Math.pow(Number(radiusofArc.value), 2) - Math.pow(Number(radiusofArc.value), 2) + Math.pow(Number(lengthofSagitta.value), 2));
}