import PromptSync from "prompt-sync";

import numeros from "./numeros.js";
import adicionarNumero from "./adicionar.js";
import removerNumero from "./remover.js";
import calcularMedia from "./media.js";

const prompt = PromptSync();

let opcao = -1; // Variável para armazenar a opção do usuário
let num = -1;

do {
    console.log("====== MENU ======");
    console.log("1 - Adicionar número");
    console.log("2 - Remover número");
    console.log("3 - Listar números");
    console.log("4 - Calcular média");
    console.log("5 - Calcular mediana");
    console.log("0 - Sair");
    
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: // Adicionar um número
            console.log("Qual número você deseja adicionar?");
            num = parseFloat(prompt("R: "));
            adicionarNumero(num);
            break;
        case 2:
            removerNumero();
            break;
        case 3:
            console.table(numeros);
            break;
        case 4:
            console.log(`A média é: ${calcularMedia()}`);
            break;
        case 5: // calcular a mediana
            break;
        case 0:
            console.log("Fechando programa...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0)