"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docentesControllers = void 0;
const Docentes_1 = __importDefault(require("../Dao/Docentes"));
class DocentesControllers {
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield Docentes_1.default.crearUsuario(req.body);
            res.json(datos);
        });
    }
    crearTercero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield Docentes_1.default.crearTercero(req.body);
            res.json(datos);
        });
    }
    listarDocentes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield Docentes_1.default.listarDocentes();
            res.json(datos);
        });
    }
    buscarDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { INICIO_SESION } = req.params;
            const datos = yield Docentes_1.default.buscarDocente(INICIO_SESION);
            res.json(datos);
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_USUARIO } = req.params;
            const datos = yield Docentes_1.default.eliminarUsuario(ID_USUARIO);
            res.json(datos);
        });
    }
    eliminarTercero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_TERCERO } = req.params;
            const datos = yield Docentes_1.default.eliminarTercero(ID_TERCERO);
            res.json(datos);
        });
    }
    actualizarTercero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_TERCERO } = req.params;
            const datos = yield Docentes_1.default.actualizarTercero(req.body, ID_TERCERO);
            res.json(datos);
        });
    }
}
exports.docentesControllers = new DocentesControllers();
