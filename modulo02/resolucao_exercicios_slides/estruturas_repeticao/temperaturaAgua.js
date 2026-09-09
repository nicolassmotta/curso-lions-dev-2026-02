// Slide 156 - Atividade 3: Temperatura da Água
// Crie uma variável temperaturaAgua começando com o valor 90.
// Usando um laço `while`, crie uma condição para que o bloco se repita enquanto a temperatura for menor que 100.
// Dentro do laço, imprima "A temperatura está em [valor] graus. Aquecendo..."
// e aumente o valor da temperatura em 2 a cada repetição.

let temperaturaAgua = 90;

while (temperaturaAgua < 100) {
    console.log(`A temperatura está em ${temperaturaAgua} graus. Aquecendo...`);
    temperaturaAgua = temperaturaAgua + 2;
}
