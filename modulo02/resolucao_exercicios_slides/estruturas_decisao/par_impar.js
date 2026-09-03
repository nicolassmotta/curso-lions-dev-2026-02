// Slide 105 - Atividade 1: número par ou ímpar
// pedir um número ao usuário e converter para inteiro com parseInt()
// usar o operador de módulo (%) para descobrir o resto da divisão por 2
// tratar o caso do zero antes de testar par/ímpar

import PromptSync from "prompt-sync";

const prompt = PromptSync();

let numero = parseInt(prompt("Digite um número: "));

if (numero === 0) {
  console.log("Esse número é zero.");
} else if (numero % 2 === 0) {
  console.log("É um número par.");
} else {
  console.log("É um número ímpar.");
}
