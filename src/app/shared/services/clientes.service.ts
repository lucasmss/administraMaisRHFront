import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/clientes/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient ) { }


  postSalvarCliente(cliente: Clientes) : Observable<Clientes> {
    return this.http.post<Clientes>('http://localhost:8080/api/clientes', cliente);
  }

  postAtualizarCliente(cliente: Clientes) : Observable<any> {
    return this.http.put<Clientes>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  getListarClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>('http://localhost:8080/api/clientes');
  }

  getListarCliente(id: number): any {
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  deletarCliente(cliente: Clientes): any {
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }


}


