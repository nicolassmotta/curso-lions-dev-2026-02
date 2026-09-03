// Slide 129 - Atividade 2: média das notas guardadas em um array
// criar o array notas vazio
// pedir prova1 e prova2 ao usuário (uma de cada vez), convertendo com parseFloat()
// usar push() para adicionar cada nota ao array
// calcular a média referenciando as posições do array e imprimir o resultado

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const notas = [];
const prova1 = parseFloat(prompt("Nota 1: "));
const prova2 = parseFloat(prompt("Nota 2: "));

notas.push(prova1);
notas.push(prova2);

const media = (notas[0] + notas[1]) / notas.length;

console.log(`A média é: ${media}`);
