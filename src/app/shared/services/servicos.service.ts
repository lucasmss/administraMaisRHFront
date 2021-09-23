import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicos } from '../models/servicos/servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiURL: string = environment.apiURLBase + 'api/servico-prestado';

  constructor(private http: HttpClient ) { }

  postSalvarServico(servico: Servicos) : Observable<Servicos> {
      return this.http.post<Servicos>(this.apiURL, servico);
  }

}


