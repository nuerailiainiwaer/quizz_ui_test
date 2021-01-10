import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterAuthService {
  private messageSource = new BehaviorSubject<any>({});
  curmessage = this.messageSource.asObservable();

  private token = new BehaviorSubject<any>({});
  currenttoken = this.token.asObservable();

  constructor() {}

  sendMe(message: any) {
    this.messageSource.next(message);
  }
  sendToken(message: any) {
    this.token.next(message);
  }
}
