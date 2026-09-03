// Slide 107 - Atividade 3: em que ano o usuário nasceu
// criar uma constante com o ano atual (assim não precisa pedir mais uma entrada)
// pedir o nome e a idade do usuário, convertendo a idade para inteiro com parseInt()
// imprimir as duas possibilidades: se já fez aniversário (idade) e se ainda não fez (idade - 1)

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const anoAtual = 2026;

const nome = prompt("Qual o seu nome? ");
const idade = parseInt(prompt("Qual a sua idade? "));

// só com a idade não dá para saber se o aniversário já passou este ano,
// por isso o programa mostra os dois anos possíveis
const anoSeJaFezAniversario = anoAtual - idade;
const anoSeAindaNaoFez = anoAtual - idade - 1;

console.log(`Nome: ${nome}`);
console.log(`Se você já fez aniversário este ano, nasceu em ${anoSeJaFezAniversario}.`);
console.log(`Se ainda não fez, nasceu em ${anoSeAindaNaoFez}.`);
