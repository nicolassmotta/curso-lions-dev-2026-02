// Slide 79 - Atividade: média de duas notas
// importar a biblioteca prompt-sync para receber entradas
// declarar variável para a nota 1, convertendo para float com parseFloat()
// declarar variável para a nota 2, convertendo para float com parseFloat()
// criar uma variável para calcular e armazenar a média aritmética
// imprimir a mensagem final exibindo o resultado da média

import promptSync from "prompt-sync";

const prompt = promptSync();

let num1 = parseFloat(prompt("Qual foi a sua nota da prova 01? "));
let num2 = parseFloat(prompt("Qual foi a sua nota da prova 02? "));

// os parênteses são obrigatórios: sem eles a divisão acontece antes da soma,
// e o resultado sai errado (num1 + num2 / 2 não é a média)
let media = (num1 + num2) / 2;

console.log(`A média das suas notas é: ${media}`);
