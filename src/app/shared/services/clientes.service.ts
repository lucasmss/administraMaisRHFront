import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/clientes/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient ) { }


  salvarCliente(cliente: Clientes) : Observable<Clientes> {
    return this.http.post<Clientes>('http://localhost:8080/api/clientes', cliente);
  }





}


