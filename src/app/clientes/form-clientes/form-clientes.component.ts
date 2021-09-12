import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  cliente: Clientes;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute 
    ) {
     this.cliente = new Clientes();
   }

  ngOnInit(): void {
    this.clientePorId();
  }

  clientePorId(){
    let params : Observable<Params> = this.activatedRouter.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service
          .getListarCliente(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Clientes()
          )
      }
    });
  }

  salvar(){
    if(this.id){
    this.service.postAtualizarCliente(this.cliente)
        .subscribe(
          response => {
            this.success = true;
            this.errors = null;
          }, errorResponse => {
            this.success= false;
            this.errors = ['Erro ao Atualizar o Cliente.'];  
          }
        );
    }
    else{
    this.service.postSalvarCliente(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success= false;
          this.errors = errorResponse.error.erros;  
        } );
  }
  }

  voltar(){
    this.router.navigate(['/cadastrados']);
  }

}
