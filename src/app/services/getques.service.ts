import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetquesService {
  private_road =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/types/5d713995b721c3bb38c1f5d0/questions';
  private_road1 =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/types/5d713995b721c3bb38c1f5d2/questions';
  private_road2 =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/types/5d713995b721c3bb38c1f5d4/questions';
  private_road3 =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/types/5d713995b721c3bb38c1f5d1/questions';
  privat_road4 =
    'https://nuerailiainiwaer-test-quizz-api.zeet.app/api/v1/types/5d713995b721c3bb38c1f5d3/questions';
  constructor(private http: HttpClient) {}
  getRoad1(): Observable<any> {
    return this.http.get<any>(this.private_road);
  }
  getRoad2(): Observable<any> {
    return this.http.get<any>(this.private_road1);
  }
  getRoad3(): Observable<any> {
    return this.http.get<any>(this.private_road2);
  }
  getRoad4(): Observable<any> {
    return this.http.get<any>(this.private_road3);
  }
  getRoad5(): Observable<any> {
    return this.http.get<any>(this.privat_road4);
  }
}
