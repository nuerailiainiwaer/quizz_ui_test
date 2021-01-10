import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthService) {}
  title = 'quizz-ui';
  man() {
    return this.auth.loggedIn();
  }

  out() {
    this.auth.logoutUser();
  }
}
