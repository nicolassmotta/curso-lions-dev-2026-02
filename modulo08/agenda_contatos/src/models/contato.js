import mongoose from "mongoose";

const contatoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome é obrigatório."],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "O e-mail é obrigatório."],
            trim: true,
            lowercase: true,
            unique: [true, "O e-mail já foi utilizado."]
        },
        telefones: [{
            type: String,
            trim: true
        }],
        excluidoEm: {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const Contato = mongoose.model('Contato', contatoSchema);
export default Contato;