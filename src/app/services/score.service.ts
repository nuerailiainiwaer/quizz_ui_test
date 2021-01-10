import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  createScore(id: any, score: any, status: any) {
    const body = { status: status, Score: score };
    const link = `https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/score/${id}`;
    return this.http.post<any>(link, body);
  }
}
