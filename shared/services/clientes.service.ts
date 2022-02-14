import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/clientes/clientes';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + 'api/clientes';

  constructor(private http: HttpClient ) { }


  postSalvarCliente(cliente: Clientes) : Observable<Clientes> {
    return this.http.post<Clientes>(`${this.apiURL}`, cliente);
  }

  postAtualizarCliente(cliente: Clientes) : Observable<any> {
    return this.http.put<Clientes>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getListarClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiURL);
  }

  getListarCliente(id: number): any {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletarCliente(cliente: Clientes): any {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }


}


