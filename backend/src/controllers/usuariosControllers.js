const Usuario = require("../models/usuarioModel");



module.exports = {

    async index(req, res){
        const user = await Usuario.find();
        res.json(user);
    },

    async create(req,res){
        const { nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

        let data = {};

        let user = await Usuario.findOne({email_usuario});

        if(!user){

            data = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
            user = await Usuario.create(data);

            return res.status(200).json(user);

        }else{
            return res.status(500).json(user);
        }
        
    },

    async show(req, res){
        //const { _id } = req.params;
        const user = await Usuario.findById(req.params.id);
        return res.json(user);
    },

    async destroy(req, res){
        await Usuario.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async update(req, res){
        const {_id, nome_usuario, email_usuario, senha_usuario, tipo_usuario } = req.body;
        const data = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
        const user = await Usuario.findOneAndUpdate({_id}, data, {new:true});

        return res.json(user);
    },
    async login(req,res){
        const {email, senha} = req.body;
        Usuario.findOne({email_usuario:email, tipo_usuario:1},function(err,user){
            if(err){
                console.log(err);
                res.status(200).json({erro:"Erro no servidor. Por favor, tente novamente"})
            }else if(!user){
                res.status(200).json({status:2,error:"E-mail ou senha não conferem"})
            }else {
                const payload = { email }
                const token = jwt.sign(payload, secrete, {
                    expiresIn:'24'
                })
                .res.cookie("token", token, {httpOnly:true})
                .res.status(200).json({status:1, auth:true, token:token,id_client:user._id,})
            }
        })
    }
}
