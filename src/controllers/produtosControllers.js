const Produto = require("../models/produtoModel");



module.exports = {

    async index(req, res){
        const product = await Produto.find();
        res.json(product);
    },

    async create(req,res){
        const { nome_produto, descricao_produto, preco_produto, qnt_produto } = req.body;

        let data = {};

        let product = await Produto.findOne({nome_produto});

        if(!product){

            data = { nome_produto, descricao_produto, preco_produto, qnt_produto };
            product = await Produto.create(data);

            return res.status(200).json(product);

        }else{
            return res.status(500).json(product);
        }
        
    },

    async show(req, res){
        //const { _id } = req.params;
        const product = await Produto.findById(req.params.id);
        return res.json(product);
    },

    async destroy(req, res){
        await Produto.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async update(req, res){
        /*
        const {_id, nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

        const data = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
        */

        const product = await Produto.findOneAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    }
}
