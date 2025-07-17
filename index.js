const express=require('express'); // importando una libreria
require("dotenv").config(); // esto carga la variables
const sequelize=require("./config/database")
const router =require('./routes/UsuarioRoute')// todos los endpoints del usuario

const app=express()// intancioando una aplicacion tipo express
// const port=3000;
// esto permite leer un  JSON QUE LLEGUE POR BODY
const port=process.env.PORT
app.use(express.json())


app.use('/', router);//use todos los endpoints del usuario

// sequelize sincroniza la base de datos con el proyecto
sequelize.sync().then(()=>{

}).catch((error)=>{
    console.log(`error al conectar la base de datos ${error}`)
});

app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
})






//req: request
//res: response
/*
@app.route("/", method=["get","post"])
def home():
   return "hola"
 */
// app.get("/",(req, res)=>{
//     res.send("backend con express")
    
// })

// const port=3000;

// // ruta usuarios
// // esto quedadra en BBDD
// let  usuarios=[
//     {id:1, nombre:"alexis",email: "alexisserrato1992@gmail.com"},
//     {id:2, nombre:"ernesto",email: "serratopublicidad@gmail.com"},
//     {id:3, nombre:"camilo",email: "camiloserrato@gmail.com"},
// ]
// app.get("/usuarios/todos",(req, res)=>{
//     res.json(usuarios)
// });

// // obtener usuarios por id

// app.get("/usuarios/buscar/:id", (req,res)=>{
//     const id = parseInt (req.params.id);
//     //console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuario)
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"Usuario no encontrado"
//         })
//     }
//     res.json(usuario)
// })

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
   
// })

// //actualizar un usuario Update

// app.put("/usuarios/actualizar/:id",(req, res)=>{
//     const {nombre, email}=req.body;
//     const id=parseInt(req.params.id);
//     //buscar 
//     const usuario=usuarios.find(u=>u.id===id)
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"Usuario a modificar no encontrado"
//         })
//     }
//     const infoAnterior=(usuario.nombre,usuario.email); //guardo los datos encontrados
//     usuario.nombre=nombre;//modifica campo nombre
//     usuario.email=email;
//     res.status(202).json({
//         mensaje:"Usuario modificado correctamento",
//         infoAnterior:infoAnterior,
//         infoNueva:usuario
//     })

//  })

//  //delete
//  app.delete("/usuarios/eliminar/:id",(req,res)=>{
//     //captura el id pasado por parametros
//     const id=parseInt(req.params.id);
//     //encontrar el indice correspondiente al id
//     const index=usuarios.findIndex(user=>user.id===id)
//     //eliminar de la lista la info del indice encontrado
//     //console.log(index)
//     if(index===-1){
//         res.status(404).json({
//             mensaje:`usuario con id ${id} no encontrado`
//         })
//         return;
//     }else{  
//         usuarios.splice(index)
//          res.status(200).json({
//          mensaje:`usuario con id ${id} eliminadocorrectamente`
//     })

//     }
  

//  })









// app.listen(port,()=>{
//     console.log(`servidor ejecutando en el puerto ${port}`)
// })

