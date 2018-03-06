import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public email: string;
  public password: string;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }
}
