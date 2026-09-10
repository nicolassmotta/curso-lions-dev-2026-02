import PromptSync from "prompt-sync";
const prompt = PromptSync();

let genero = prompt("Qual é o gênero do filme escolhido? R: ");

switch (genero){
    case "Acao":
        console.log("Sala 01");
        break;
    case "Comédia":
        console.log("Sala 02");
        break;
    case "Terror":
        console.log("Sala 03");
        break;
    case "Animacao":
        console.log("Sala 04");
        break;
    case "Sair":
        console.log("Saindo...");
        break;
    default:
        console.log("Genero nao encontrado! Verifique as opcoes válidas!");
        break;
}

