
function removerContato(contatos, id) {
    const indice = contatos.findIndex(contato => contato.id === id );

    if (indice === -1) {
        console.log("Erro: Cadastro não encontrado.");
        return false;
    }

    contatos.splice(indice, 1);
    console.log("Contato removido com sucesso!");
    return true;
}

export default removerContato;