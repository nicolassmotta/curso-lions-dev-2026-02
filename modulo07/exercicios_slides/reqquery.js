import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/contatos", (req, res) => {
    const termo = req.query.termo;

    res.status(200).json({
        "mensagem": "Dados da query recebidos com sucesso!",
        "termo": termo
    });
});

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
});
