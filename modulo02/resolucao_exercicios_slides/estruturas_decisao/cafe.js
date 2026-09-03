// Slide 106 - Atividade 2: gosta de café?
// perguntar ao usuário se ele gosta de café (sim/nao)
// usar uma condicional para salvar a resposta numa variável booleana gostaDeCafe
// com base nesse booleano, imprimir uma mensagem personalizada para cada caso

import PromptSync from "prompt-sync";

const prompt = PromptSync();

let resposta = prompt("Você gosta de café? (sim/nao) ");

if (resposta !== "sim" && resposta !== "nao") {
  console.log("Resposta Inválida.");
} else {
  let gostaDeCafe = resposta === "sim";

  if (gostaDeCafe) {
    console.log("Ele gosta de café!");
  } else {
    console.log("Ele *não* gosta de café!");
  }
}
