import PromptSync from "prompt-sync";
const teclado = PromptSync();

let nome = teclado("Informe seu nome: ");
let codigoCracha = parseInt(teclado("Informe o numero do seu cracha: "));

if(validador(nome, codigoCracha)){
    console.log("Acesso concedido.");
} else{
    console.log("Acesso negado.");
}

const validador = (nome, codigoCracha) => {
    
    switch (true) {
        case (codigoCracha > 1000 && nome.length > 5):
            return true;
            break;
    
    }

    return false;

};