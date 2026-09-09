// Slide 157: Atividade 4: Evento
// O número de ingressos vendidos por lote está no array lotes = [50, 40, 60, 30, 70].
// Crie uma variável totalIngressos iniciando em 0.
// Utilize laço de repetição para somar o total de ingressos.
// Ao final, imprima "O total de ingressos vendidos foi: [total]".

const lotes = [50, 40, 60, 30, 70];

let totalIngressos = 0;

for (let i = 0; i < lotes.length; i++) {
    totalIngressos += lotes[i];
}

console.log(`O total de ingressos vendidos foi: ${totalIngressos}`);
