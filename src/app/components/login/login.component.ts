import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  code: any;
  loginUserData = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.code = res.code * 2;
        localStorage.setItem('token', res.token);
        localStorage.setItem('code', this.code);
        console.log(res);

        if (res.auth === false) {
          this._router.navigate(['/auth']);
        } else if (res.auth === true) {
          this._router.navigate(['/home']);
        }
      },
      (err) => console.log(err)
    );
  }
}
