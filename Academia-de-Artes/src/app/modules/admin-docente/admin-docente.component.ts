import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Docentes } from 'src/app/core/models/docentes.model';
import { DialogDeleteComponent } from 'src/app/shared/components/popup-delete/dialogdelete.component';
import { AdminDocentePopupComponent } from './admin-docente-popup/admin-docente-popup.component';
import { DocenteService } from './services/docente.service';

@Component({
  selector: 'app-admin-docente',
  templateUrl: './admin-docente.component.html',
  styleUrls: ['./admin-docente.component.css']
})
export class AdminDocenteComponent implements OnInit {
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';
  tracksRandom: Array<Docentes> = []

  public fields: Array<any> =[];
  @Input() data: Array<any> = [];

  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  @Input('showSearchControl') showSearchControl: boolean = true;  
  
  constructor(
    private _docenteservice: DocenteService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {

      this.fields = [
        {
            name: 'nombre',
            display: 'Usuario',
            align: 1,
            link: true,
            allowSorting: true,
            formatter: '1'
        },
        {
          name: 'ID_USUARIO',
          display: 'Id de usuario',
          align: 1,
          link: true,
          allowSorting: true,
          formatter: ''
      },
        {
          name: 'ID_TERCERO',
          display: 'Id de tercero',
          align: 1,
          link: true,
          allowSorting: true,
          formatter: ''
      },
        {
            name: 'email',
            display: 'Fecha de ingreso',
            align: 1,
            allowSorting: true,
            formatter: ''
        },
    ];

     }

  ngOnInit(): void {
    this.getDocentes();
  }


  getDocentes():void{
    this._docenteservice.getDocentes()
    .subscribe((Response:any[]) =>{
      this.data = Response
       console.log('😒😒', this.data);       
    }, error => {
      console.log(error);
    
  })
  }

  eliminarDocente(id: number, id2:number ){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: '500px',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
  
    this._docenteservice.deleteDocentes(id).subscribe(data =>{
       this.getDocentes();
       this.snackBar.open('El docente fue eliminada con éxito!','🤘',{
        duration: 2000
      });
    }, error =>{
      console.log(error)
      this.snackBar.open('ERROR al intentar eliminar el docente, consulte con el administrador!','🔴🔴',{
        duration: 2000
      });
    });

    this._docenteservice.deleteUsuario(id2).subscribe(data =>{
      this.getDocentes();
      this.snackBar.open('El usuario fue eliminada con éxito!','🤘',{
       duration: 2000
     });
   }, error =>{
     console.log(error)
     this.snackBar.open('ERROR al intentar eliminar el docente, consulte con el administrador!','🔴🔴',{
       duration: 2000
     });
   });
  }
  });
  
  }

  openAdd(){
    const dialogRef = this.dialog.open(AdminDocentePopupComponent,{
      width: this.width,
      height: this.height,        
    });
  
  dialogRef.afterClosed().subscribe(result => {
    this.getDocentes();
  });
  }

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

      openEdit(nosotros: Docentes){
        const dialogRef = this.dialog.open(AdminDocentePopupComponent,{
          width: this.width,
          data: nosotros
  
        });
        
        dialogRef.afterClosed().subscribe(result => {
          // this.obtenerNosotros(); 
        });
        }
        

}
