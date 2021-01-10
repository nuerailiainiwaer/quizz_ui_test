import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterAuthService } from '../../co_co/register-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerdUserDAta = {
    email: '',
    password: '',
  };
  errorme: string;
  code: any;
  token: any;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _connect: RegisterAuthService
  ) {}

  ngOnInit(): void {}
  registerUser() {
    this._auth.registerUser(this.registerdUserDAta).subscribe(
      (res) => {
        if (res.auth == false) {
          this._router.navigate(['/auth']);
          this.code = res.code * 2;
          localStorage.setItem('token', res.token);
          localStorage.setItem('code', this.code);
        }
      },
      (err) => {
        console.log(err.error.error);
        this.errorme = err.error.error;
      }
    );
  }
}
