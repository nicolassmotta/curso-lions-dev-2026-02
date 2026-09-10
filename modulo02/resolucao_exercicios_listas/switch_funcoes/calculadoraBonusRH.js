import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salarioAtual = Number(prompt("Qual é o seu salário? R: "));
let cargoAtual = prompt("Qual é o seu cargo atual? R: ");

calcularBonus(salarioAtual, cargoAtual)

function calcularBonus(salarioAtual, cargoAtual){
    switch (cargoAtual) {
        case "Estagiário":
            console.log(`Salário com o bonus é ${salarioAtual * 1.1}`);
            break;
        case "Júnior":
            console.log(`Salário com o bonus é ${salarioAtual * 1.15}`);
            break;
        case "Pleno":
            console.log(`Salário com o bonus é ${salarioAtual * 1.2}`);
            break;
        default:
            console.log(`Cargo não mapeado, ou seja, não haverá bonus!`);
            break;
    }
}

