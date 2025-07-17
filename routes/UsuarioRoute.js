const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController')

router.get("/usuarios/todos",UsuarioController.obtenerUsuarios);
router.get("/usuarios/buscar/:id",UsuarioController.obtenerUsuariosPorId);
router.post("/usuarios/crear",UsuarioController.crearNuevoUsuario);

module.exports = router;