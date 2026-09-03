// Slide 140 - Atividade: objeto com a sua pintura favorita
// esta atividade não precisa pedir entrada do usuário
// criar um objeto para guardar as informações da sua pintura favorita
// imprimir uma mensagem usando interpolação, acessando cada propriedade com o ponto

let pintura = {
  nomePintura: "Abaporu",
  nomeArtista: "Tarsila do Amaral",
  ano: 1928,
  curiosidade: "o quadro mais valioso brasileiro",
};

// cuidado: esta variável solta NÃO é a mesma coisa que pintura.nomePintura.
// são dois espaços de memória diferentes, por isso a mensagem abaixo continua
// imprimindo "Abaporu", e não "O Grito"
let nomePintura = "O Grito";

console.log(`Minha pintura favorita é ${pintura.nomePintura} feita por 
  ${pintura.nomeArtista} em ${pintura.ano} e a curiosidade 
  dessa pintura é ${pintura.curiosidade}.`);
