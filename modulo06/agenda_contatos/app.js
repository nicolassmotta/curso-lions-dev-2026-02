import PromptSync from "prompt-sync";

import adicionarContato from "./adicionar_contatos.js";
import contatos from "./contatos.js";
import listarContatos from "./listar_contatos.js";

const prompt = PromptSync();

let opcao = -1;

function mainMenu() {
    console.log("\n====== MENU ======");
    console.log("1 - Adicionar contato");
    console.log("2 - Editar contato");
    console.log("3 - Listar contatos");
    console.log("4 - Remover contato");
    console.log("0 - Sair");
}

function menuAdicionar() {
    // input do usuário
    const i_nome = prompt("Nome: ");
    const i_email = prompt("Email: ");

    let i_telefones = [];
    let tel = 'n';

    do {
        const i_tel = prompt("Telefone: ");

        i_telefones.push(i_tel);

        tel = prompt("Deseja adicionar mais um telefone? (s/n) ");
    } while (tel === 's');

    // Objeto quer será inserido do array
    const novoContato = {
        nome: i_nome,
        email: i_email,
        telefones: i_telefones
    };

    const adicionado = adicionarContato(contatos, novoContato);
    if (adicionado) {
        console.log("Contato cadastrado com sucesso!");
    }
}

function menuEditar() {
    console.log("Menu em construção!");
}

function menuRemover() {
    console.log("Menu em construção!");
}

do {
    mainMenu();  
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: // Adicionar contato
            menuAdicionar();
            break;
        case 2: // Editar contatos
            menuEditar();
            break;
        case 3: // Listar contatos
            listarContatos(contatos);
            break;
        case 4: // Remover contato
            menuRemover();
            break;
        case 0:
            console.log("Fechando programa...");
            break;
        default:
            break;
    }
} while (opcao !== 0);
