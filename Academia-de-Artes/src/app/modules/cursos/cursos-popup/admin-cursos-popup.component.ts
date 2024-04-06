import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cursos } from 'src/app/core/models/cursos.model';

@Component({
  selector: 'app-admin-cursos-popup',
  templateUrl: './admin-cursos-popup.component.html',
  styleUrls: ['./admin-cursos-popup.component.css']
})
export class AdminCursosPopupComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';

  
  constructor(@Inject(MAT_DIALOG_DATA) public cursos: Cursos,
  public dialogRef: MatDialogRef<AdminCursosPopupComponent>,
  private fb: FormBuilder,
  public snackBar: MatSnackBar) {

    this.formLogin = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      descripcion: ['', Validators.compose([
                        Validators.maxLength(5000)
      ])],
  });

  if(this.cursos !== null){
    this.id= cursos.id;
    this.formLogin.patchValue({
      nombre: cursos.nombre,
      descripcion: cursos.descripcion,
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
