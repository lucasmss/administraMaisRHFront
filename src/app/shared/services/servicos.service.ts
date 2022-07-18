import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicos } from '../models/servicos/servicos';
import { ServicosBuscar } from '../models/servicos/servicos-buscar';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiURL: string = environment.apiURLBase + '/api/servico-prestado';

  constructor(private http: HttpClient ) { }

  postSalvarServico(servico: Servicos) : Observable<Servicos> {
      return this.http.post<Servicos>(this.apiURL, servico);
  }

  getServicos(nome: string, mes:number): Observable<ServicosBuscar[]> {

    const httpParams = new HttpParams()
          .set("nome", nome)
          .set("mes", mes ? mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();

    return this.http.get<ServicosBuscar[]>(url);
  }

}


