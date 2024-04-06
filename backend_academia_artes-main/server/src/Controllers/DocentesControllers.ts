import { Request, Response } from "express";
import daoDocentes from '../Dao/Docentes';

class DocentesControllers {
    
    public async crearUsuario(req: Request, res: Response) {
        var datos = await daoDocentes.crearUsuario(req.body)
        res.json(datos);
    }

    public async crearTercero(req: Request, res: Response) {
        var datos = await daoDocentes.crearTercero(req.body)
        res.json(datos);
    }

    public async listarDocentes(req: Request, res: Response) {
        const datos = await daoDocentes.listarDocentes();
        res.json(datos);
    }

    public async buscarDocente(req: Request, res: Response) {
        const { INICIO_SESION } = req.params;
        const datos = await daoDocentes.buscarDocente(INICIO_SESION);
        res.json(datos);
    }

    public async eliminarUsuario(req: Request, res: Response) {
        const { ID_USUARIO } = req.params;
        const datos = await daoDocentes.eliminarUsuario(ID_USUARIO);
        res.json(datos);
    }

    public async eliminarTercero(req: Request, res: Response) {
        const { ID_TERCERO } = req.params;
        const datos = await daoDocentes.eliminarTercero(ID_TERCERO);
        res.json(datos);
    }

    public async actualizarTercero(req:Request,res:Response){
        const {ID_TERCERO} = req.params;
        const datos = await daoDocentes.actualizarTercero(req.body,ID_TERCERO)
        res.json(datos)
    }

}

export const docentesControllers = new DocentesControllers();