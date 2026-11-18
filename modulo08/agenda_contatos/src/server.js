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

app.listen(port, () => {
    console.log(`aplicação iniciada na porta: ${port}`);
});
