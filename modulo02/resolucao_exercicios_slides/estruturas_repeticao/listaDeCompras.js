// Slide 155 - Atividade 2: Lista de compras
// Crie um array chamado listaDeCompras contendo quatro itens: "Arroz", "Feijão", "Macarrão" e "Carne".
// Imprima cada um dos itens no console no formato: "Item: [nome do item]".
// Utilize o tamanho do array (.length)

let compras = ["Arroz", "Feijao", "Macarrao", "Carne"]; // tamanho = 4

for (let i = 0; i < compras.length; i++) {
    console.log(`Item: ${compras[i]}`); // Interpolação
    // console.log("Item: " + compras[i]); // Concatenação
}

// para acessar o valor de um indice no array
// voce vai usar nome_do_array[indice]