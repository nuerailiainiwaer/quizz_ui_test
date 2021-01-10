import { Component, OnInit } from '@angular/core';
import { RegisterAuthService } from '../../co_co/register-auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authcode',
  templateUrl: './authcode.component.html',
  styleUrls: ['./authcode.component.css'],
})
export class AuthcodeComponent implements OnInit {
  code: any;
  token: any;
  input: number;

  constructor(
    private _connect: RegisterAuthService,
    private _router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    // this._connect.curmessage.subscribe((message) => (this.code = message));
    // this._connect.currenttoken.subscribe((message) => (this.token = message));
    // localStorage.setItem('token', this.token);
    // localStorage.setItem('code', this.code);
  }
  submit() {
    var localcode = localStorage.getItem('code');
    var a = parseInt(localcode);
    var actualCode = a / 2;
    console.log(actualCode);
    if (this.code == actualCode) {
      this._router.navigate(['/home']);
      localStorage.removeItem('code');
      this._auth.changingauthToTrue().subscribe((res) => console.log(res));
    }
  }
}
