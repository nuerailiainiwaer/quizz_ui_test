import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { GetquesService } from '../services/getques.service';

@Injectable({
  providedIn: 'root',
})
export class SavedService {
  private _loginUser =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/auth/login';
  private _loggedinuser =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/auth/me';

  constructor(
    private http: HttpClient,
    private _rooter: Router,
    private getQuesfrom: GetquesService
  ) {}
  getQues() {
    return this.http.get<any>(this._loggedinuser);
  }
  getQuesWithId(id: any) {
    const url = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/users/${id}/questions`;
    return this.http.get<any>(url);
  }
  getSingleQues(id: any) {
    var url = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/questions/${id}`;
    return this.http.get<any>(url);
  }
  getScoreForLoggedinuser(id: number) {
    const _getscoresforLogged = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/score/${id}`;
    return this.http.get<any>(_getscoresforLogged);
  }
  deleteSingleScore(id: number) {
    const _deleteScoreforTheUser = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/score/${id}/delete`;
    return this.http.delete<any>(_deleteScoreforTheUser);
  }

  addTosavedQues(person: any, arr: any) {
    const body = { saved: arr };
    const bbbbbbb = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/questions/save/${person}`;
    return this.http.put<any>(bbbbbbb, body);
  }
}
