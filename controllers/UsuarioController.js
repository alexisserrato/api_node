const { where } = require("sequelize");
const Usuario = require("../models/Usuarios");

exports.obtenerUsuarios= async(req, res)=>{
    const usuario = await Usuario.findAll();// el await es para que espere en la respuesta
    res.json(usuario);//[]
}



exports.obtenerUsuarios= async(req,res)=>{
try{
    const usuarios =await Usuario.findAll();
    res.json(usuarios);//[]
   }catch(error){
     res.json({mensaje:error})
   }

}

exports.obtenerUsuariosPorId=async(req,res)=>{
    try{
    const id=parseInt(req.params.id)
    const usuario= await Usuario.findByPk(id);// si existe lo encontrará
    if(!usuario){
        return res.status(400).json({
            mensaje:"Usuario no encontrado"
        })
    }
    res.json(usuario)// si el usuario en BD entregue los datos
}catch(error){
    console.log(error)
    return res.status(401).json({mensaje:error})
}
}

exports.crearNuevoUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        if (!nombre , !email , !password) {
            return res.status(400).json({ mensaje: "Nombre, email y password son obligatorios" });
        }
        const existeUsuario = await Usuario.findOne({ where: { email } });
        if (existeUsuario) {
            return res.status(409).json({ 
                mensaje: "El email ya está registrado" 
            });
        }
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password
        });

        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            usuarioCreado: nuevoUsuario
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};

// exports.crearNuevoUsuario = async (req, res) => {
//     const { nombre, email } = req.body;
//     const existeUsuario = await Usuario.findOne({where:{ email:email } });
//     console.log("res",existeUsuario)
//     if (existeUsuario) {
//         return res.status(409).json({ 
//             mensaje: "El email ya está registrado" 
//         });
//     }
//     const nuevoUsuario = await Usuario.create({ nombre, email, password }); // Crear nuevo usuario
//     res.status(201).json({                            
//         mensaje: "Usuario creado correctamente", // Respuesta exitosa
//         usuarioCreado: nuevoUsuario
//     });
// };

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
   