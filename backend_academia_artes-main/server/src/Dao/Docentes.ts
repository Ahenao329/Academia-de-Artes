import pool from '../database';

class Docentes {
    public static listarDocentes() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("SELECT * FROM USUARIO WHERE ID_PERFIL = (SELECT ID_PERFIL FROM PERFIL WHERE NOMBRE_PERFIL = 'DOCENTE')", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public static buscarDocente(INICIO_SESION) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("SELECT * FROM USUARIO WHERE ID_PERFIL = (SELECT ID_PERFIL FROM PERFIL WHERE NOMBRE_PERFIL = 'DOCENTE') AND INICIO_SESION like '%"+INICIO_SESION+"%'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static crearUsuario(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into usuario set ?', usuario, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static eliminarUsuario(ID_USUARIO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from usuario "
                query += "where ID_TERCERO = ? ;"
                pool.query(query, [ID_USUARIO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static crearTercero(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into tercero set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static eliminarTercero(ID_TERCERO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from tercero "
                query += "where ID_TERCERO = ? ;"
                pool.query(query, [ID_TERCERO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static actualizarTercero(dato, ID_TERCERO) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("update tercero set ? where tercero.ID_TERCERO = ?", [dato, ID_TERCERO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            } catch (error) {

            }
        })
    }

    

}

export default Docentes;