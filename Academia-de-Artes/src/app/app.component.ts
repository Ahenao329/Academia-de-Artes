import { Component } from '@angular/core';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  login = true
  title = 'academia';
}
