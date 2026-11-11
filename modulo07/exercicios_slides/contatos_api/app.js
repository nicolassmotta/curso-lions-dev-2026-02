import express from 'express';

import contatos from './contatos.js';
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
