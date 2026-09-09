// Slide 158 - Atividade 5: Soma
// Escreva um programa que verifique os números de 0 a 999
// Fazer a soma dos ímpares e pares e mostrar como saída (se numero % 2 == 0 é par).
// Mostrar também o total de números ímpares e pares.
// *Desafio*: fazer a média aritmética da soma dos números impares e par, e imprimir qual dos dois teve o maior total.

// inicialização das variaveis
let somaPares = 0;
let somaImpares = 0;

let totalPares = 0;
let totalImpares = 0;

let mediaPares = 0;
let mediaImpares = 0;

// laço de repetição
for (let i = 0; i <= 999; i++) {
    if (i % 2 === 0) { // par
        somaPares = somaPares + i;
        totalPares = totalPares + 1; // totalPares++
        console.log(`O número ${i} é par.`);
    } else { // impar
        somaImpares = somaImpares + i;
        totalImpares = totalImpares + 1;
        console.log(`O número ${i} é ímpar.`);
    }
}

// calcular a media
mediaPares = somaPares / totalPares;
mediaImpares = somaImpares / totalImpares;

// qual soma é maior? pares ou impares
if (somaPares > somaImpares) {
    console.log("A soma dos valores pares é maior.");
} else if (somaImpares > somaPares) {
    console.log(" A soma dos valores ímpares é maior.");
} else {
    console.log("A soma dos valores são iguais.");
}

console.log("==== PARES ====");
console.log(`Quantidade: ${totalPares}`);
console.log(`Soma: ${somaPares}`);
console.log(`Média: ${mediaPares}`);

console.log("==== ÍMPARES ====");
console.log(`Quantidade: ${totalImpares}`);
console.log(`Soma: ${somaImpares}`);
console.log(`Média: ${mediaImpares}`);
