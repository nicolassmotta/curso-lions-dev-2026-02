import dotenv from 'dotenv';

import express from 'express';
import conectarBanco from './database.js';

import Contato from './models/contato.js';

// Carregar configurações de variáveis de ambiente (.env da pasta onde executa o comando de inicialização)
dotenv.config();

// conecta banco de dados
conectarBanco();

// Inicializa o Express
const app = express();
const port = Number(process.env.PORT);

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// Rota principal para teste
app.get("/", (req, res) => {
    res.send("API de Contatos esta online!");
});

// Cadastrar um contato
// Desafio: validar os dados de entrada
app.post("/contato", async (req, res) => {
    try {
        const dados = req.body;
        const novo_contato = {
            nome: dados.nome,
            email: dados.email,
            telefones: dados.telefones
        };
        const contato = await Contato.create(novo_contato);
        res.status(201).json(contato);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao cadastrar contato: ${error.message}` });
    }
});

// Buscar todos os contatos não excluídos
app.get("/contatos", async (req, res) => {
    try {
        const contatos = await Contato.find({ excluidoEm: null });
        res.status(200).json(contatos);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao consultar contatos: ${error.message}` });
    }
});

// Atualização parcial, campo e-mail
app.patch("/contatos/email/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const novo_email = req.body.email;

        const excluido = await Contato.findByIdAndUpdate(
            { _id: id, excluidoEm: null },
            { email: novo_email },
            { new: true, runValidators: true }
        );

        if (!excluido) {
            return res.status(404).json({ mensagem: "Contato não encontrado ou e-mail já existente." });
        }

        res.status(200).json({ mensagem: "Contato atualizado com sucesso", contato: excluido });

    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao excluir o contato: ${error.message}` });
    }
});


// SOFT DELETE
app.delete("/contatos/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const excluido = await Contato.findByIdAndUpdate(
            { _id: id, excluidoEm: null },
            { excluidoEm: new Date() },
            { new: true }
        );

        if (!excluido) {
            return res.status(404).json({ mensagem: "Contato não encontrado ou já excluído." });
        }

        res.status(200).json({ mensagem: "Contato excluído com sucesso", contato: excluido });

    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao excluir o contato: ${error.message}` });
    }
});


app.listen(port, () => {
    console.log(`aplicação iniciada na porta: ${port}`);
});
