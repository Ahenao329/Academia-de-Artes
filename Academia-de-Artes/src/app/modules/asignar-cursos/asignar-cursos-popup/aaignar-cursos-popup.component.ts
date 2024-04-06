import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsignarCursos } from 'src/app/core/models/asignar-cursos.model';

@Component({
  selector: 'app-aaignar-cursos-popup',
  templateUrl: './aaignar-cursos-popup.component.html',
  styleUrls: ['./aaignar-cursos-popup.component.css']
})
export class AaignarCursosPopupComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';
  
  constructor(@Inject(MAT_DIALOG_DATA) public cursos: AsignarCursos,
  public dialogRef: MatDialogRef<AaignarCursosPopupComponent>,
  private fb: FormBuilder,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
      codigo: ['', Validators.compose([
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
      fechaFin: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      dias: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      horaInicio: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      horaFin: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
  });

  if(this.cursos !== null){
    this.id= cursos.id;
    this.formLogin.patchValue({
      codigo: cursos.codigo,
      nombre: cursos.nombre,
      profesor: cursos.profesor,
      fechaInicio: cursos.fechaInicio,
      fechaFin: cursos.fechaFin,
      dias: cursos.dias,
      horaInicio: cursos.horaInicio,
      horaFin: cursos.horaFin,
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
