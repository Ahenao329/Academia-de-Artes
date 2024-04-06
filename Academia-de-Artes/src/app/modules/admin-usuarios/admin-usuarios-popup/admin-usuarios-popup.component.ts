import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';import { Usuarios } from 'src/app/core/models/usuarios.model';

@Component({
  selector: 'app-admin-usuarios-popup',
  templateUrl: './admin-usuarios-popup.component.html',
  styleUrls: ['./admin-usuarios-popup.component.css']
})
export class AdminUsuariosPopupComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';

  constructor(@Inject(MAT_DIALOG_DATA) public usuarios: Usuarios,
  public dialogRef: MatDialogRef<AdminUsuariosPopupComponent>,
  private fb: FormBuilder,
  public snackBar: MatSnackBar) { 

    
    this.formLogin = this.fb.group({
      codtipoDocumentoigo: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      nombre: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      profesor: ['', Validators.compose([
                        Validators.maxLength(5000)
      ])],
      fechaInicio: ['', Validators.compose([
        Validators.maxLength(5000)
])],
  });

  if(this.usuarios !== null){
    this.id= usuarios.id;
    this.formLogin.patchValue({
      // tipoDocumento: usuarios.tipoDocumento,
      // nombre: usuarios.nombre,
      // apellido: usuarios.apellido,
      // email: usuarios.email,
    });
  }


  }

  ngOnInit(): void {
  }

  close() {
  
    this.id= 0;
    this.formLogin.patchValue({
      descripcion: null,
      imagen: null,

    })
}
}
