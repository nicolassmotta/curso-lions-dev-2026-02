import PromptSync from "prompt-sync";
const prompt = PromptSync();

let tabuada = Number(prompt("Qual número você deseja realizar a tabuada? R: "));
//let resultado = 0

for (let i = 0; i <= 10; i++) { //i = i + 1 | i += 1
    //resultado = i * tabuada;
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    
}