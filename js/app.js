var on = document.getElementById('on');
var sign = document.getElementById('sign');
var punto = document.getElementById('punto');

var numeroCero = document.getElementById('0');
var numeroUno = document.getElementById('1');
var numeroDos = document.getElementById('2');
var numeroTres = document.getElementById('3');
var numeroCuatro = document.getElementById('4');
var numeroCinco = document.getElementById('5');
var numeroSeis = document.getElementById('6');
var numeroSiete = document.getElementById('7');
var numeroOcho = document.getElementById('8');
var numeroNueve = document.getElementById('9');

var por = document.getElementById('por');
var menos = document.getElementById('menos');
var dividido = document.getElementById('dividido');
var igual = document.getElementById('igual');
var mas = document.getElementById('mas');
var display = document.getElementById('display');
var valortotal = 0;
var resultado = 0;
var tipoOperacion = 0;
var provieneResultado = 0;
var Operadoranterior = 0;


on.addEventListener('click', function(){
	valortotal = 0;
	display.innerText= '0';
	tipoOperacion = 0;
	resultado = 0; 
	Operadoranterior = 0;
})
sign.addEventListener('click', function(){
	alert('sign');
})
punto.addEventListener('click', function(){
	asignarValor('.')
})
numeroCero.addEventListener('click', function(){
	asignarValor('0');
})
numeroUno.addEventListener('click', function(){
	asignarValor('1');
})
numeroDos.addEventListener('click', function(){
	asignarValor('2');
})
numeroTres.addEventListener('click', function(){
	asignarValor('3');
})
numeroCuatro.addEventListener('click', function(){
	asignarValor('4');
})
numeroCinco.addEventListener('click', function(){
	asignarValor('5');
})
numeroSeis.addEventListener('click', function(){
	asignarValor('6');
})
numeroSiete.addEventListener('click', function(){
	asignarValor('7');
})
numeroOcho.addEventListener('click', function(){
	asignarValor('8');
})
numeroNueve.addEventListener('click', function(){
	asignarValor('9');
})
por.addEventListener('click', function(){
	operacion('por');
})
menos.addEventListener('click', function(){
	operacion('menos');
})
dividido.addEventListener('click', function(){
	operacion('dividido');
})
igual.addEventListener('click', function(){
	operacion('igual');
})
mas.addEventListener('click', function(){
	operacion('mas');
})


function operacion(operador){

	if (operador == 'mas' || operador == 'menos' || operador == 'por' || operador == 'dividido'){
		if (valortotal == 0 || valortotal == '0.' ){
			if (resultado == 0){
				resultado = 0;
				tipoOperacion = operador;
			}
		}else{
			if (resultado > 0 && provieneResultado == 0){
				switch (tipoOperacion){
				case  'mas':
					resultado = resultado + parseFloat(valortotal);
					break;
				case  'menos':
					resultado = resultado - parseFloat(valortotal);
					break;
				case  'por':
					resultado = resultado * parseFloat(valortotal);
					break;
				case  'dividido':
					resultado = resultado / parseFloat(valortotal);
					break;
				}
			}else{
				resultado = parseFloat(valortotal);
			}			
			valortotal = 0;
			display.innerText = '0';
			tipoOperacion = operador;
		}
	}
	else if (operador == 'igual'){
			if (valortotal == '0' || valortotal == '0.'){
				alert('Debe ingresar algun valor');
			}else
			{
				if (tipoOperacion == 'mas' ){
					resultado = parseFloat(resultado) + parseFloat(valortotal);
					display.innerText = resultado.toString().substr(0,8);
					valortotal = resultado;
				}
				else if (tipoOperacion == 'menos' ){
					resultado = parseFloat(resultado) - parseFloat(valortotal);
					display.innerText = resultado.toString().substr(0,8);
					valortotal = resultado;
				}
				else if (tipoOperacion == 'por' ){
					resultado = parseFloat(resultado) * parseFloat(valortotal);
					display.innerText = resultado.toString().substr(0,8);
					valortotal = resultado;
				}
				else if (tipoOperacion == 'dividido' ){
					resultado = parseFloat(resultado) / parseFloat(valortotal);
					display.innerText = resultado.toString().substr(0,8);
					valortotal = resultado;
				}
				provieneResultado = 1;
			}
	}
}


function asignarValor(tecla){
	if (valortotal == '0' && tecla == 0){
		display.innerText= '0';
		valortotal = 0;
	}else{
		if (valortotal == '0'){
			if (tecla == '.'){
				display.innerText= '0.';
				valortotal = '0.';
			}else{
				display.innerText= tecla;
				valortotal = tecla;
			}
		}else{
			if (tecla == '.'){
				if (valortotal.toString().indexOf('.') == -1){
					display.innerText= (valortotal + tecla).toString().substr(0,8);
					valortotal = valortotal + tecla;
				}
			}else{
				display.innerText= (valortotal + tecla).toString().substr(0,8);;
				valortotal = valortotal + tecla;
				provieneResultado = 1;
			}
		}
	}
	provieneResultado = 0;
}

