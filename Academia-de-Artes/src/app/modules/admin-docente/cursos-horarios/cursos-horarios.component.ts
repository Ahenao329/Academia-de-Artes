import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-horarios',
  templateUrl: './cursos-horarios.component.html',
  styleUrls: ['./cursos-horarios.component.css']
})
export class CursosHorariosComponent implements OnInit {

  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  @Input('showSearchControl') showSearchControl: boolean = true;  

  
  
  constructor() { }

  ngOnInit(): void {
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
}
