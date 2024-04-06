import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cursos } from 'src/app/core/models/cursos.model';
import { AdminCursosPopupComponent } from './cursos-popup/admin-cursos-popup.component';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  @Input('showSearchControl') showSearchControl: boolean = true;  

  constructor(      public dialog: MatDialog,
    public snackBar: MatSnackBar ) { }

        ngOnInit(): void {
        }

        openAdd(){
          const dialogRef = this.dialog.open(AdminCursosPopupComponent,{
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

      openEdit(nosotros: Cursos){
        const dialogRef = this.dialog.open(AdminCursosPopupComponent,{
          width: this.width,
          data: nosotros
  
        });
        
        dialogRef.afterClosed().subscribe(result => {
          // this.obtenerNosotros(); 
        });
        }

}
