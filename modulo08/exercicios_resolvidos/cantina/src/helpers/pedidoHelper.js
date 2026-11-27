// Valor unitário de cada item
function valorUnitario(item) {
    let valor = 0;
    switch (item) {
        case 'Salgado':
            valor = 8;
            break;
        case 'Suco':
            valor = 6;
            break;
        case 'Combo':
            valor = 12;
            break;
        case 'Bolo':
            valor = 5;
            break;
        default:
            break;
    }

    return valor;
};

// Calcular valor do pedido **sem desconto**
function calcularValor(item, quantidade) {
    const valorItem = valorUnitario(item);
    const valorTotal = valorItem * quantidade;
    return valorTotal;
}

// Calcular valor do desconto do pedido
function calcularDesconto(quantidade, valorTotal) {
    if (quantidade >= 5 ) {
        return valorTotal * 0.10;
    } else {
        return 0;
    }
}

export { valorUnitario, calcularValor, calcularDesconto };