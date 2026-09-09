// Slide 154 - Atividade 1: Tabuada
// Pedir um número inteiro para o usuário - Lembre de converter parseInt()
// Imprimir a tabuada 0 ou 1 até 10 do número fornecido usuário
// Dica: a condição do for vai ser de 1 ou 0 até 10, e você pode fazer a conta usando tabuada multiplicado por i.
// Desafio: faça com que o programa calcule até 100.
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let tabuada = Number(prompt("Qual número você deseja realizar a tabuada? R: "));
//let resultado = 0

for (let i = 0; i <= 10; i++) { //i = i + 1 | i += 1
    //resultado = i * tabuada;
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    
}