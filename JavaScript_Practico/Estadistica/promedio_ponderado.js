function promedioPonderado(notas) {
	const notasConCredito = notas.map(function(notaObjeto) {
		return notaObjeto.nota * notaObjeto.credito;
	});

	const sumaNotasCredito = notasConCredito.reduce(function(suma=0, valor) {
		return suma + valor;
	});

	const creditos = notas.map(function(notaObjeto) {
		return notaObjeto.credito;
	});

	const sumaCreditos = creditos.reduce(function(suma=0, valor) {
		return suma + valor;
	});

	const promedio = sumaNotasCredito / sumaCreditos;

	return promedio
}

const notas = [
	{
        nota: 10,
        credito: 2,
    },
    {
        nota: 8,
        credito: 5,
    },
    {
        nota: 3,
        credito: 9,
    },
    {
        nota: 10,
        credito: 3,
    },
    {
        nota: 5,
        credito: 5,
    },
    {
        nota: 1,
        credito: 2,
    },
];

console.log(promedioPonderado(notas))