// Slide 108 - Atividade 4: maior ou menor de idade
// pedir o nome e a idade do usuário, convertendo a idade para inteiro com parseInt()
// se for maior de idade, imprimir a mensagem avisando isso
// se for menor, calcular quantos anos faltam e imprimir na mensagem

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const nome = prompt("Qual o seu nome? ");
const idade = parseInt(prompt("Qual a sua idade? "));

if (idade >= 18) {
  console.log(`${nome}, você já é maior de idade.`);
} else {
  const quantoFalta = 18 - idade;
  console.log(`${nome}, você vai ser maior de idade em ${quantoFalta} anos.`);
}
