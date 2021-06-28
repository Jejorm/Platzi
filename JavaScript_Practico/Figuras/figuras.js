// Código del cuadrado.
console.group("Cuadrados");

// Perímetro
function perimetroCuadrado(lado) {
	return Number(lado) * 4;
}

// Área
function areaCuadrado(lado) {
	return Number(lado) * Number(lado);
}

console.groupEnd();


// Código del triángulo.
console.group("Triángulos");

// Perímetro
function perimetroTriangulo(lado1, lado2, base) {
	return Number(lado1) + Number(lado2) + Number(base);
}

// Área
function areaTriangulo(base, altura) {
	return (Number(base) * Number(altura)) / 2;
}

console.groupEnd();


// Código del círculo.
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
	return Number(radio) * 2;
} 

// Perímetro
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return Number(diametro) * Math.PI;
}

// Área
function areaCirculo(radio) {
	return (Number(radio) * Number(radio)) * Math.PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
	const input = document.getElementById("InputCuadrado");

	const value = input.value;

	const perimetro = perimetroCuadrado(value);

	alert(perimetro);
}

function calcularAreaCuadrado() {
	const input = document.getElementById("InputCuadrado");

	const value = input.value;

	const area = areaCuadrado(value);

	alert(area);
}

function calcularPerimetroTriangulo() {
	const lado1 = document.getElementById("InputLado1Triangulo");
	const lado2 = document.getElementById("InputLado2Triangulo");
	const base = document.getElementById("InputBaseTriangulo");

	const values = [lado1.value, lado2.value, base.value];

	const perimetro = perimetroTriangulo(values[0], values[1], values[2]);

	alert(perimetro);

}

function calcularAreaTriangulo() {
	const base = document.getElementById("InputBaseTriangulo");
	const altura = document.getElementById("InputAlturaTriangulo");

	const values = [base.value, altura.value];

	const area = areaTriangulo(values[0], values[1]);

	alert(area);
}

function calcularPerimetroCirculo() {
	const radio = document.getElementById("InputRadio");

	const value = radio.value;

	const perimetro = perimetroCirculo(value);

	alert(perimetro);
}
 
function calcularAreaCirculo() {
	const radio = document.getElementById("InputRadio");

	const value = radio.value;

	const area = areaCirculo(value);

	alert(area);
}
