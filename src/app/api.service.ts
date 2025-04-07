import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Update the baseUrl if your backend is hosted elsewhere
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  submitSurvey(userId: string, survey: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/survey`, { user_id: userId, survey });
  }

  getRecommendations(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/recommendations/${userId}`);
  }

  placeOrder(userId: string, order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/order/${userId}`, { order });
  }
}
