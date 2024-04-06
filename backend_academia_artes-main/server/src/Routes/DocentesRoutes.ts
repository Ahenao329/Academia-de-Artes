import { Router } from 'express';
import { docentesControllers } from '../Controllers/DocentesControllers';

class DocentesRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.post('/usuario', docentesControllers.crearUsuario);
        this.router.post('/tercero', docentesControllers.crearTercero);
        this.router.get('/listar', docentesControllers.listarDocentes);
        this.router.get('/usuario/buscar/:INICIO_SESION', docentesControllers.buscarDocente);
        this.router.delete('/usuario/eliminar/:ID_USUARIO', docentesControllers.eliminarUsuario);
        this.router.delete('/tercero/eliminar/:ID_TERCERO', docentesControllers.eliminarTercero);
        this.router.put('/tercero/actualizar/:ID_TERCERO', docentesControllers.actualizarTercero);
    }


}

const docentesRoutes = new DocentesRoutes()
export default docentesRoutes.router
