import PromptSync from "prompt-sync";
const prompt = PromptSync();

let codigoProduto = prompt("Qual é o codigo do produto? R: ")

switch (codigoProduto) {
    case "A1":
        console.log("Você escolheu Batata Chips");
        break;
    case "B2":
        console.log("Você escolheu Amendoim");
        break;
    case "C3":
        console.log("Você escolheu Biscoito de Chocolate");
        break;
    default:
        console.log("Código inválido. Tente novamente!");
        break;
}