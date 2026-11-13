import express from 'express';

import contatos from './contatos.js';
import adicionarContato from './criar_contatos.js';
import atualizarContato from './atualizar_contatos.js';
import removerContato from './excluir_contatos.js';

const app = express();
const port = 3000;

app.use(express.json());

function validaId(req, res, next) {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("id tem que ser um número");
    }

    next();
}

app.get('/contatos', (req, res) => {
    res.status(200).json(contatos);
});

app.get('/contatos/:id', validaId, (req, res) => {
    const id = parseInt(req.params.id);

    const contato = contatos.find(contato => contato.id === id);

    if (!contato) {
        return res.status(404).send("Contato não encontrado.");
    }

    res.json(contato);
});

app.post("/contatos", (req, res) => {
    const novoContato = req.body;

    const criado = adicionarContato(contatos, novoContato);

    if (!criado) {
        return res.status(400).send("Email inválido.")
    }

    res.status(201).send("Contato criado com sucesso.");
});

app.put("/contatos/:id", validaId, (req, res) => {
    const contatoAtualizado = req.body;
    const id = parseInt(req.params.id);

    const atualizado = atualizarContato(contatos, id, contatoAtualizado);

    if (!atualizado) {
        return res.status(400).send("Email ou id não existem.");
    }

    res.status(200).send("Contato atualizado com sucesso.");
});

app.delete('/contatos/:id', validaId, (req, res) => {
    const id = parseInt(req.params.id);

    const excluido = removerContato(contatos, id);

    if (!excluido) {
        return res.status(400).send("Contato não encontrado.");
    }

    res.status(200).send("Contato excluído com sucesso.");
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
