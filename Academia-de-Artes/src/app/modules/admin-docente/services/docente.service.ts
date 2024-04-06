import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../../core/models/response';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'application/json'
    })
  };
  
@Injectable({
    providedIn: 'root'
})
export class DocenteService {
      private readonly URL = environment.api
        
    constructor(private http: HttpClient) { }

    getDocentes():Observable<any>  {
        return this.http.get<any>(`${this.URL}/docentes/listar`)
    }
    
    
    deleteDocentes(id:number): Observable<any>{
        return this.http.delete(`${this.URL}/usuarios/eliminar/` + id)
    }

    deleteUsuario(id:number): Observable<any>{
        return this.http.delete(`${this.URL}/tercero/eliminar/` + id)
    }

    SaveDocentes(docente: any): Observable<any> {
        return this.http.post(`${this.URL}/docentes/tercero`, docente)
      }
   
    Saveusuario(usuario: any): Observable<any> {
    return this.http.post(`${this.URL}/docentes/usuario`, usuario)
    }

    updatedocente(id: number, usuario: any): Observable<Response>{
      return this.http.put<Response>(`${this.URL}/tercero/` + id, usuario, httpOption)
    }
}