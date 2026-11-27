// configurar variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

// fazer conexão com o banco de dados
import conectarBanco from './database.js';
await conectarBanco();


import express from 'express';
import Pedido from './models/pedido.js';
import { valorUnitario, calcularValor, calcularDesconto } from './helpers/pedidoHelper.js'

const port = parseInt(process.env.PORT);

const app = express();

// Ativa a leitura de JSON para todas as rotas abaixo
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.status(200).json({ mensagem: "Bem vindo a API-CANTINA" });
});

// Rota para cadastrar um pedido
app.post("/pedido", async (req, res) => {
    try {
        // variável para armazenar o body da requisição
        const dados = req.body;
        
        // extrair dados da requisição
        const nomeCliente = dados.nomeCliente;
        const item = dados.item;
        const quantidade = parseInt(dados.quantidade);
        const formaPagamento = dados.formaPagamento;
        const observacao = dados.observacao;

        // lógica para preencher os campos valorUnitario e valorTotal
        const valor_unitario = valorUnitario(item);
        const subtotal = calcularValor(item, quantidade);
        const desconto = calcularDesconto(quantidade, subtotal);
        const valor_total = subtotal - desconto;

        const novo_pedido = {
            nomeCliente,
            item,
            quantidade,
            formaPagamento,
            observacao,
            valorUnitario: valor_unitario,
            valorTotal: valor_total
        };

        const pedido = await Pedido.create(novo_pedido);
        res.status(201).json({ mensagem: "Pedido criado com sucesso!", pedido });

    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao criar pedido: ${error.message}` });
    }
})

// Rota para buscar todos os pedidos
app.get("/pedido", async (req, res) => {
    try {
        const pedidos = await Pedido.find({ excluidoEm: null });

        const quantidade = pedidos.length;

        let msg = `Quantidade de pedidos encontrados: ${quantidade}`;

        res.status(200).json({ mensagem: msg, pedidos });
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao buscar os pedidos: ${error.message}` });
    }
});


// Rota para buscar pedidos de um cliente
app.get("/pedido/busca", async (req, res) => {
    try {
        const cliente = req.query.cliente;

        if (!cliente) {
            return res.status(400).json({ mensagem: "Obrigatório informar o cliente" });
        }

        const filtro = {
            excluidoEm: null,
            nomeCliente: {
                $regex: cliente,
                $options: 'i'
            }
        };

        const pedidos = await Pedido.find(filtro);

        const quantidade = pedidos.length;

        let msg = `Quantidade de pedidos encontrados: ${quantidade}`;

        res.status(200).json({ mensagem: msg, pedidos });

    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao buscar os pedidos: ${error.message}` });
    }
});

// Rota para atuaizar 'status' do pedido
app.patch("/pedido/status/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const novoStatus = req.body.status;

        const pedidoAtualizado = await Pedido.findByIdAndUpdate(
            { _id: id, excluidoEm: null },
            { status: novoStatus },
            { new: true, runValidators: true }
        );

        if (!pedidoAtualizado) {
            return res.status(404).json({ mensagem: "Pedido não encontrado." });
        }


        res.status(200).json({ mensagem: "Pedido atualizado com sucesso", pedido: pedidoAtualizado });
        
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao atualizar o status do pedido: ${error.message}` });
    }
});

// Rota para excluir um pedido - SOFT DELETE
app.delete("/pedido/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const excluido = await Pedido.findByIdAndUpdate(
            { _id: id, excluidoEm: null },
            { excluidoEm: new Date() },
            { new: true, runValidators: true }
        );

        if (!excluido) {
            return res.status(404).json({ mensagem: "Pedido não encontrado ou já excluído." });
        }

        res.status(200).json({ mensagem: "Pedido excluido com sucesso.", pedido: excluido });
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao excluir pedido: ${error.message}` });
    }
});

// Iniciar servidor express
app.listen(port, () => {
    console.log(`aplicação iniciada na porta: ${port}`);
});

