import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema(
    {
        nomeCliente: {
            type: String,
            required: [true, "'nomeCliente' é obrigatório."],
            trim: true,
        },
        item: {
            type: String,
            required: [true, "'item' é obrigatório."],
            enum: ["Salgado", "Suco", "Combo", "Bolo"],
        },
        quantidade: {
            type: Number,
            required: [true, "'quantidade' é obrigatório."],
            min: [1, "A quantidade deve ser maior que 0."],
        },
        formaPagamento: {
            type: String,
            required: [true, "'formPagamento' é obrigatório."],
            enum: ["Dinheiro", "Pix", "Cartão"]
        },
        observacao: {
            type: String,
            trim: true,
            default: null
        },
        valorUnitario: {
            type: Number,
        },
        valorTotal: {
            type: Number,
        },
        status: {
            type: String,
            enum: ["Pendente", "Pago", "Entregue"],
            default: "Pendente"
        },
        excluidoEm: {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;