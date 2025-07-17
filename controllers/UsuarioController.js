const Usuario = require("../models/Usuarios");

exports.obtenerUsuarios= async(req, res)=>{
    const usuario = await Usuario.findAll();// el await es para que espere en la respuesta
    res.json(usuario);//[]
}

exports.obtenerUsuariosPorId=async(req,res)=>{
    const id=parseInt(req.params.id)
    const usuario= await Usuario.findByPk(id);// si existe lo encontrará
    if(!usuario){
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }
    res.json(usuario)// si el usuario en BD entregue los datos
}


exports.crearNuevoUsuario = async (req, res) => {
    const { nombre, email } = req.body;
    const existeUsuario = await Usuario.findOne({ email } );
    if (existeUsuario) {
        return res.status(409).json({ 
            mensaje: "El email ya está registrado" 
        });
    }
    const nuevoUsuario = await Usuario.create({ nombre, email }); // Crear nuevo usuario
    res.status(201).json({                            // Respuesta exitosa
        mensaje: "Usuario creado correctamente",
        usuarioCreado: nuevoUsuario
    });
};

// // crear un nuevo usuario
// app.post("/usuarios/crear",(req, res)=>{
//     //console.log(req.body)
//     const {nombre, email}=req.body;
//     //console.log(nombre, email)
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email:email,
//     }


//     // guardar el objetoo creado en la BBDD
//     usuarios.push(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"Usuario creado correctamente",
//         usuarioCreado:nuevoUsuario
//     })
   