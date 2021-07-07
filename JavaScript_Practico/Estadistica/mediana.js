function ordernarLista(lista) {
	for (let i=1; i < lista.length; i++) {
		temporal = lista[i];
		posicion = i;

		while (posicion >= 0 && temporal < lista[posicion]) {
			lista[posicion+1] = lista[posicion];
			posicion--;
		}

		lista[posicion+1] = temporal;
	}
}

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(
		function (valorAcumulado=0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);

	const promedioLista = sumaLista / lista.length;
	return promedioLista;
} 

function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function calcularMediana(lista) {
	ordernarLista(lista)

	const mitadLista = parseInt(lista.length / 2);

	let mediana;

	if (esPar(lista.length)) {
		const elemento1 = lista[mitadLista - 1];
		const elemento2 = lista[mitadLista];
		const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

		mediana = promedioElemento1y2;

	} else {
		mediana = lista[mitadLista];
	}

	return mediana;
}