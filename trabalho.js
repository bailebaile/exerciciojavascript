// 1. Função contarOcorrencias
function contarOcorrencias(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}

// 2. Função ordenarPorIdade
function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

// 3. Função separarParesImpares
function separarParesImpares(arr) {
    return arr.reduce((acc, num) => {
        acc[num % 2 === 0 ? 'pares' : 'impares'].push(num);
        return acc;
    }, { pares: [], impares: [] });
}

// 4. Função ehPalindromo
function ehPalindromo(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

// 5. Função somaMatriz
function somaMatriz(matriz) {
    return matriz.reduce((sum, row) => sum + row.reduce((rowSum, num) => rowSum + num, 0), 0);
}

// 6. Função substituirElemento
function substituirElemento(arr, valorAntigo, valorNovo) {
    return arr.map(elem => elem === valorAntigo ? valorNovo : elem);
}

// 7. Função multiplicarMatrizes
function multiplicarMatrizes(matriz1, matriz2) {
    if (matriz1[0].length !== matriz2.length) {
        return "Não é possível multiplicar estas matrizes";
    }

    return matriz1.map(row => {
        return matriz2[0].map((_, colIndex) => {
            return row.reduce((sum, cell, rowIndex) => {
                return sum + cell * matriz2[rowIndex][colIndex];
            }, 0);
        });
    });
}

// Testes para cada função
console.log("Testes das funções:");

// 1. contarOcorrencias
console.log("\n1. contarOcorrencias:");
console.log(contarOcorrencias([1, 2, 3, 1, 2, 1])); // Deve retornar {1: 3, 2: 2, 3: 1}
console.log(contarOcorrencias([1, 1, 1, 1])); // Deve retornar {1: 4}

// 2. ordenarPorIdade
console.log("\n2. ordenarPorIdade:");
console.log(ordenarPorIdade([
    {nome: "João", idade: 25},
    {nome: "Maria", idade: 30},
    {nome: "Pedro", idade: 20}
])); // Deve retornar array ordenado por idade

// 3. separarParesImpares
console.log("\n3. separarParesImpares:");
console.log(separarParesImpares([1, 2, 3, 4, 5, 6])); // Deve retornar {pares: [2, 4, 6], impares: [1, 3, 5]}
console.log(separarParesImpares([1, 3, 5, 7])); // Deve retornar {pares: [], impares: [1, 3, 5, 7]}

// 4. ehPalindromo
console.log("\n4. ehPalindromo:");
console.log(ehPalindromo("A man, a plan, a canal: Panama")); // Deve retornar true
console.log(ehPalindromo("race a car")); // Deve retornar false

// 5. somaMatriz
console.log("\n5. somaMatriz:");
console.log(somaMatriz([[1, 2], [3, 4], [5, 6]])); // Deve retornar 21
console.log(somaMatriz([[1, 1], [1, 1]])); // Deve retornar 4

// 6. substituirElemento
console.log("\n6. substituirElemento:");
console.log(substituirElemento([1, 2, 3, 2, 4, 2], 2, 5)); // Deve retornar [1, 5, 3, 5, 4, 5]
console.log(substituirElemento([1, 1, 1], 1, 2)); // Deve retornar [2, 2, 2]

// 7. multiplicarMatrizes
console.log("\n7. multiplicarMatrizes:");
console.log(multiplicarMatrizes([[1, 2], [3, 4]], [[1, 2], [3, 4]])); // Deve retornar [[7, 10], [15, 22]]
console.log(multiplicarMatrizes([[1, 2]], [[3], [4]])); // Deve retornar [[11]]
console.log(multiplicarMatrizes([[1, 2]], [[1, 2, 3]])); // Deve retornar uma mensagem de erro