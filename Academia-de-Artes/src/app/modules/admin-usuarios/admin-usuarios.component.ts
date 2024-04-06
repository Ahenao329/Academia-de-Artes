import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuarios } from 'src/app/core/models/usuarios.model';
import { AdminUsuariosPopupComponent } from './admin-usuarios-popup/admin-usuarios-popup.component';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  @Input('showSearchControl') showSearchControl: boolean = true;  

  constructor( public dialog: MatDialog,
    public snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  openAdd(){
    const dialogRef = this.dialog.open(AdminUsuariosPopupComponent,{
      width: this.width,
      height: this.height,        
    });
  
  dialogRef.afterClosed().subscribe(result => {
    // this.obtenerNosotros();
  });
  }

  // openAdd(){

  // }

  clearSearch() {
    this.filterPost= '';
      }

      changeSort(property: string): void {
        const {order} = this.optionSort
        this.optionSort = {
          property,
          order: order == 'asc' ? 'desc': 'asc'
        }
        console.log(this.optionSort)
      }

      openEdit(nosotros: Usuarios){
        const dialogRef = this.dialog.open(AdminUsuariosPopupComponent,{
          width: this.width,
          data: nosotros
  
        });
        
        dialogRef.afterClosed().subscribe(result => {
          // this.obtenerNosotros(); 
        });
        }
        
}
