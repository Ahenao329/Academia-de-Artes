"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gestionSeguimientoControllers_1 = require("../Controllers/gestionSeguimientoControllers");
class GestionSeguimientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/a', gestionSeguimientoControllers_1.gestionSeguimientoControllers.cargarGestion);
    }
}
const gestionSeguimientosRoutes = new GestionSeguimientosRoutes();
exports.default = gestionSeguimientosRoutes.router;
