import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/contatos/:id", (req, res) => {
    const id = req.params.id;

    // não vai chegar a ser executado pois teremos o erro 404 not found
    if(!id){
        res.status(400).json({
            "mensagem": "Erro: id não veio pela url."
        })
    }

    res.status(200).json({
        "mensagem": "Parametro pela url recebido com sucesso!",
        "id": id
    });
});

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
});
