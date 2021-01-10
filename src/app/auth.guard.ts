import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this._auth.loggedIn);
    if (this._auth.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    // else {
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }
}
