import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.css']
})
export class SideBarNavComponent implements OnInit {
  public _mostrarProfile: boolean = false;
  public sidebarShow: boolean = false;
  title = 'ADASOFT';
  constructor() { }

  ngOnInit(): void {
  }

}
