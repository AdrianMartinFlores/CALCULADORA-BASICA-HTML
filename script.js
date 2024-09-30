var name = 'Adrian';
var FirstName = 'Martín Flores';
var nombre = document.getElementById('nombre').innerText = name;
var apellidos = document.getElementsByClassName('apellidos');
console.log(apellidos.length);

function sumar() {
    var a = parseFloat(document.getElementById('numero1').value);
    var b = parseFloat(document.getElementById('numero2').value);
    var total = a + b;
    document.getElementById('resultado').value = total;
  }
  
  function restar() {
    var a = parseFloat(document.getElementById('numero1').value);
    var b = parseFloat(document.getElementById('numero2').value);
    var total = a - b;
    document.getElementById('resultado').value = total;
  }