"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Docentes {
    static listarDocentes() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("SELECT * FROM USUARIO WHERE ID_PERFIL = (SELECT ID_PERFIL FROM PERFIL WHERE NOMBRE_PERFIL = 'DOCENTE')", function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static buscarDocente(INICIO_SESION) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("SELECT * FROM USUARIO WHERE ID_PERFIL = (SELECT ID_PERFIL FROM PERFIL WHERE NOMBRE_PERFIL = 'DOCENTE') AND INICIO_SESION like '%" + INICIO_SESION + "%'", function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static crearUsuario(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into usuario set ?', usuario, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static eliminarUsuario(ID_USUARIO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from usuario ";
                query += "where ID_TERCERO = ? ;";
                database_1.default.query(query, [ID_USUARIO], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static crearTercero(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into tercero set ?', newDatos, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static eliminarTercero(ID_TERCERO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from tercero ";
                query += "where ID_TERCERO = ? ;";
                database_1.default.query(query, [ID_TERCERO], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static actualizarTercero(dato, ID_TERCERO) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("update tercero set ? where tercero.ID_TERCERO = ?", [dato, ID_TERCERO], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
            }
        });
    }
}
exports.default = Docentes;
