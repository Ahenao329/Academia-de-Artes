"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DocentesControllers_1 = require("../Controllers/DocentesControllers");
class DocentesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/usuario', DocentesControllers_1.docentesControllers.crearUsuario);
        this.router.post('/tercero', DocentesControllers_1.docentesControllers.crearTercero);
        this.router.get('/listar', DocentesControllers_1.docentesControllers.listarDocentes);
        this.router.get('/usuario/buscar/:INICIO_SESION', DocentesControllers_1.docentesControllers.buscarDocente);
        this.router.delete('/usuario/eliminar/:ID_USUARIO', DocentesControllers_1.docentesControllers.eliminarUsuario);
        this.router.delete('/tercero/eliminar/:ID_TERCERO', DocentesControllers_1.docentesControllers.eliminarTercero);
        this.router.put('/tercero/actualizar/:ID_TERCERO', DocentesControllers_1.docentesControllers.actualizarTercero);
    }
}
const docentesRoutes = new DocentesRoutes();
exports.default = docentesRoutes.router;
