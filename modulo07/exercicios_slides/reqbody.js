import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/body", (req, res) => {
    const titulo = req.body.titulo;

    if (!titulo) {
       res.status(400).json({
            "mensagem": "Erro: Titulo não enviado."
       });
    }

    res.status(201).json({ 
        "mensagem": "Dados recebidos com sucesso!",
        "titulo": titulo
    })
});

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
});
