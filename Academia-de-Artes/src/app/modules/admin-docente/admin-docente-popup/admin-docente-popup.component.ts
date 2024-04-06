import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Docentes } from 'src/app/core/models/docentes.model';
import { Usuarios } from 'src/app/core/models/usuarios.model';
import { errorMessages } from 'src/app/core/util/Validaciones.service';
import { DocenteService } from '../services/docente.service';

@Component({
  selector: 'app-admin-docente-popup',
  templateUrl: './admin-docente-popup.component.html',
  styleUrls: ['./admin-docente-popup.component.css']
})
export class AdminDocentePopupComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  ids: number | undefined
  accion ='Agregar';
  errors = errorMessages;
  data: Array<any> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public docente: Docentes,
  public dialogRef: MatDialogRef<AdminDocentePopupComponent>,
  private _docenteService: DocenteService,
  private fb: FormBuilder,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
      NOMBRES: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      APELLIDOS: ['', Validators.compose([
                        Validators.maxLength(5000)
      ])],
      TIPO_DOC: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      TELEFONO: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      NUM_DOC: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      CELULAR: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      DIRECCION: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      FECHA_INGRESO: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],      
      EMAIL: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
  });

  console.log('', this.formLogin);
  
  if(this.docente !== null){
    this.id= docente.id;
    this.formLogin.patchValue({
      TIPO_DOC: docente.TIPO_DOC,
      NOMBRES: docente.NOMBRES,
      APELLIDOS: docente.APELLIDOS,
      TELEFONO: docente.TELEFONO,
      NUM_DOC: docente.NUM_DOC,
      CELULAR: docente.CELULAR,
      DIRECCION: docente.DIRECCION,
      EMAIL: docente.EMAIL,
    });
  }

  }

  ngOnInit(): void {
  }

  guardarDocentes(){
    const docente: any = {
      NOMBRES: this.formLogin.get('NOMBRES')?.value,
      TIPO_DOC: this.formLogin.get('TIPO_DOC')?.value,
      APELLIDOS: this.formLogin.get('APELLIDOS')?.value,
      NUM_DOC: this.formLogin.get('NUM_DOC')?.value,
      TELEFONO: this.formLogin.get('TELEFONO')?.value,
      DIRECCION: this.formLogin.get('DIRECCION')?.value,
      CELULAR: this.formLogin.get('CELULAR')?.value,
      EMAIL: this.formLogin.get('EMAIL')?.value,
    }

    const usuario: any = {
      INICIO_SESION: this.formLogin.get('EMAIL')?.value,
      CONTRASEÑA: this.formLogin.get('NUM_DOC')?.value,
      FECHA_INGRESO: this.formLogin.get('FECHA_INGRESO')?.value,
      ID_PERFIL: 1,
      ID_TERCERO: this.ids
    }

    
    if(this.id == undefined){
      this.addDocentes(docente, usuario);
      } 
      if(this.id !== undefined){
       this.editDocentes(docente);
      }  
}

addDocentes(docente: Docentes, usuario:Usuarios){
  this._docenteService.SaveDocentes(docente).subscribe(data => {
    console.log('🎨🎨',data);
    this.ids = data.insertId
    console.log('🎨🎨s',this.ids);
    
    this.snackBar.open('El docente fue registrado con exito!','✌️',{
      duration: 2000,
      panelClass: ['blue-snackbar'],
    });
    this.formLogin.reset();

  }
  , 
  error => {
    this.dialogRef.close();
    this.snackBar.open('El docente no pudo ser guardado correctamente, consulte con el administrador, consulte con el administrador','🔴🔴',{
      duration: 2000,
      panelClass: ['blue-snackbar'],

    });     
   }
   )

   this._docenteService.Saveusuario(usuario).subscribe(data => {
    this.snackBar.open('El usuario fue registrado con exito!','✌️',{
      duration: 2000,
      panelClass: ['blue-snackbar'],
    });
    this.formLogin.reset();
  }
  , 
  error => {
    this.dialogRef.close();
    this.snackBar.open('El usuario no pudo ser guardado correctamente, consulte con el administrador, consulte con el administrador','🔴🔴',{
      duration: 2000,
      panelClass: ['blue-snackbar'],

    });     
   }
   )
}

editDocentes(docentes: Docentes){
this.id = this.docente.id;
docentes.id = this.id;
  this._docenteService.updatedocente(this.id, docentes).subscribe(data => {
    
    this.formLogin.reset();
    this.accion = 'Editar';
    this.id = undefined;
    this.dialogRef.close();
    this.snackBar.open('Se actualizo el docente correctamente','👌',{
      duration: 2000,
      verticalPosition: 'bottom',
      panelClass: ['warning']
    });
    this.formLogin.reset();
  }
  , error => {
    this.dialogRef.close();
    this.snackBar.open('ERROR al intentar actualizar el docente, consulte con el administrador','🔴🔴',{
      duration: 2000,
      verticalPosition: 'bottom',
      panelClass: ['warning']
    });       
   }
   )
}

  close() {
  
    this.id= 0;
    this.formLogin.patchValue({
      descripcion: null,
      imagen: null,

    })
}

}
