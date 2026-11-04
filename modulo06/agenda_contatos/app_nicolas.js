import PromptSync from "prompt-sync";
import contatos from "./contatos.js";
import adicionarContato from "./adicionar_contatos.js";
import atualizarContato from "./atualizar_contatos.js";
import excluirContato from "./excluir_contatos.js";
import listarContato from "./listar_contatos.js";

const prompt = PromptSync();

function menu() {
    console.log("============ MENU ============");
    console.log("[1] - Adicionar Contato");
    console.log("[2] - Listar Contatos");
    console.log("[3] - Editar Contato");
    console.log("[4] - Remover Contato");
    console.log("[0] - Sair");
}

let opcao = -1;

while (opcao != 0) {

    menu();

    opcao = parseInt(prompt("Qual opção você deseja escolher? R: "));

    switch (opcao) {
        case 1:
            let nome = prompt("Qual é o nome do novo contato? R: ");
            let email = prompt("Qual o email do novo contato? R: ");
            let resposta = "n";
            let telefones = [];
            let telefoneDigitado = "";
            do {
                telefoneDigitado = prompt("Qual o número de telefone você deseja inserir?");
                telefones.push(telefoneDigitado);
                resposta = prompt("Você deseja inserir mais um telefone? (s/n)");
            } while (resposta == "s");

            let novoContato = {
                nome: nome,
                email: email,
                telefones: telefones
            }

            adicionarContato(contatos, novoContato);
            break;

        case 2:
            listarContato(contatos);
            break;

        case 3:
            let idAtualizado = parseInt(prompt("Qual id você deseja editar? R: "));
            let nomeAtualizado = prompt("Qual é o nome atualizado do contato? (caso não queria mudar, pressione ENTER) R: ");
            let emailAtualizado = prompt("Qual o email atualizado do contato? (caso não queira mudar, pressione ENTER) R: ");
            let respostaAtualizado = "n";
            let telefonesAtualizado = [];
            let telefoneDigitadoAtualizado = "";
            do {
                telefoneDigitadoAtualizado = prompt("Qual o telefone atualizado do usuário? (caso não deseja mudar, pressione ENTER) R: ");
                if (telefoneDigitadoAtualizado != "") {
                    telefonesAtualizado.push(telefoneDigitadoAtualizado);
                }
                respostaAtualizado = prompt("Você deseja inserir mais um telefone? (s/n)");
            } while (respostaAtualizado == "s");

            let contatoAtualizado = {
                nome: nomeAtualizado,
                email: emailAtualizado,
                telefones: telefonesAtualizado
            }

            atualizarContato(contatos, idAtualizado, contatoAtualizado);
            break;

        case 4:
            let id = parseInt(prompt("Qual id você deseja remover? R: "));

            let temCerteza = prompt(`Você tem certeza que deseja remover esse id:${id}? (s/n) R: `);
            if (temCerteza == "s") {
               excluirContato(contatos, id);
            }

        default:
            break;
    }
}
