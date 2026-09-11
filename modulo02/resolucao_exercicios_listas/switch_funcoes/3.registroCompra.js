import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Escolha um produto cadastro no sistema:" +
  "\n[1] - Fone" +
  "\n[2] - Teclado" +
  "\n[3] - Mouse"
);

let escolha = Number(prompt("Qual produto deseja comprar? R: "));

let registroDaCompra = {
    produto: "",
    precoFixo: 0
}

switch (escolha) {
    case 1:
        registroDaCompra.produto = "Fone";
        registroDaCompra.precoFixo = 250
        break;
    case 2:
        registroDaCompra.produto = "Teclado";
        registroDaCompra.precoFixo = 100
        break;
    case 3:
        registroDaCompra.produto = "Mouse";
        registroDaCompra.precoFixo = 50
        break;
    default:
        registroDaCompra.produto = "Desconhecido";
        registroDaCompra.precoFixo = 0
        break;
}

console.table(registroDaCompra);