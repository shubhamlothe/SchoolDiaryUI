import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WEBApp';
  faCoffee = faCoffee;
  get isLoggedIn(): boolean {
    return !sessionStorage.getItem('id') ? false : true;
  };
  constructor(private userService: UserService) {
  }
}
