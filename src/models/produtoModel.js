const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    nome_produto: String,
    descricao_produto: String,
    preco_produto: Number,
    qnt_produto:{type: Number, default:1}
},{
    timestamps:true
});


const produtos = mongoose.model("Produtos", DataSchema);
module.exports = produtos;