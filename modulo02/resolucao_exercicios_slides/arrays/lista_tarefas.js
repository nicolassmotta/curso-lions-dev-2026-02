// Slide 130 - Atividade 3: gerenciador de lista de tarefas
// iniciar com um array vazio chamado listaTarefas
// pedir 3 tarefas ao usuário (uma de cada vez) e guardar com push()
// imprimir a quantidade de tarefas usando a propriedade .length
// simular a conclusão da última tarefa removendo o item com pop() e imprimir a lista atualizada

import PromptSync from "prompt-sync";

const prompt = PromptSync();

let listaTarefas = [];

const tarefa1 = prompt("Tarefa 1: ");
listaTarefas.push(tarefa1);

const tarefa2 = prompt("Tarefa 2: ");
listaTarefas.push(tarefa2);

const tarefa3 = prompt("Tarefa 3: ");
listaTarefas.push(tarefa3);

console.table(listaTarefas);

console.log(`Você tem ${listaTarefas.length} tarefas na sua lista.`);

// pop() remove o último item do array
listaTarefas.pop();
console.table(listaTarefas);
