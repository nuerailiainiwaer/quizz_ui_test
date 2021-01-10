import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/auth/register';
  private _loginUser =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/auth/login';
  private _authtotrue =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/auth/makingauthtrue';

  constructor(private http: HttpClient, private _rooter: Router) {}
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUser, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._rooter.navigate(['/']);
  }
  changingauthToTrue() {
    const body = { auth: true };
    return this.http.put<any>(this._authtotrue, body);
  }

  saveQuestion(quesid: any, userid: any) {
    const user = { userID: userid, quesID: quesid };
    const savedQuestion =
      'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/savedquestions';
    return this.http.post<any>(savedQuestion, user);
  }
  checkSavedQues(personid: any, quesId: any) {
    const body = { userID: personid, quesID: quesId };
    const checksavedQues = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/savedquestions/gettrue`;
    return this.http.put<any>(checksavedQues, body);
  }
  deleteSavedQuestion(id: any) {
    const checksavedQues = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/savedquestions/${id}`;
    return this.http.delete<any>(checksavedQues);
  }
}
