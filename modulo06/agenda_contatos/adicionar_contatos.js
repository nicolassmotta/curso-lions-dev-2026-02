
// let identificador = 3;

function adicionarContato(contatos, novoContato) {
    let emailExiste = false;

    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].email === novoContato.email) {
            emailExiste = true;
            break;
        }
    }

    if (emailExiste) {
        console.log("Erro: email que esta tentando ser cadastrado ja existe no sistema.");
        return false;
    }

    if (contatos.length > 0) {
        let ultimoContato = contatos[contatos.length - 1];
        novoContato.id = ultimoContato.id + 1;
    }
    // novoContato.id = identificador;
    // identificador++;

    contatos.push(novoContato);
    return true;
}

export default adicionarContato;