const express=require('express'); // importando una libreria


const app=express()// intancioando una aplicacion tipo express

//req: request
//res: response
/*
@app.route("/", method=["get","post"])
def home():
   return "hola"
 */
app.get("/",(req, res)=>{
    res.send("backend con express")
    
})

const port=3000;

// ruta usuarios
// esto quedadra en BBDD
let  usuarios=[
    {id:1, nombre:"alexis",email: "alexisserrato1992@gmail.com"},
    {id:2, nombre:"ernesto",email: "serratopublicidad@gmail.com"},
]
app.get("/usuarios",(req, res)=>{
    res.json(usuarios)
});

// obtener usuarios por id

app.get("/usuarios/:id", (req,res)=>{
    const id = parseInt (req.params.id);
    //console.log(typeof(id))
    const usuario=usuarios.find(user=>user.id===id)
    res.json(usuario)
})
















app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
})

