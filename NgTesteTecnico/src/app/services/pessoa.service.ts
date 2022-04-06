import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  API_URL = "https://localhost:7247/api/Pessoa/";

  constructor(private http: HttpClient) { }

  getPessoaId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.API_URL + id)
  }
}
