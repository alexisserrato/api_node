const Usuario = require("../models/Usuarios");

exports.obtenerUsuarios= async(req, res)=>{
    const usuario = await Usuario.findAll();
    res.json(usuario);//[]
}