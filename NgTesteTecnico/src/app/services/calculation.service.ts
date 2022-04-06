import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Calculation } from '../models/calculation';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  API_URL = "https://localhost:7247/api/Parcela";
  header = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) { }

  Calculate(calculation: Calculation): Observable<number> {
    return this.http.post<number>(
              this.API_URL,
              calculation,
              { headers: new HttpHeaders(this.header) }
          );
  }
}
