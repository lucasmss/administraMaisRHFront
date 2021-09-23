import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { ClientesService } from 'src/app/shared/services/clientes.service';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Clientes[] = [];
  clienteSelecionado: Clientes;
  success: String;
  errors: String;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute 
    ) {}

  ngOnInit(): void {
    this.clientesCadastrados();
  }

  clientesCadastrados(){
    this.service.getListarClientes()
        .subscribe(response => {
          return this.clientes = response;
        })
  }

  cadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  selecionarCliente(cliente: Clientes){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
   this.service.deletarCliente(this.clienteSelecionado)
   .subscribe(
     response => {
       console.log('passed');
      this.success = 'Cliente excluido com sucesso!'
      this.ngOnInit();
     },
     error => this.errors = 'O correu algum erro ao excluir'
   );

  }

}
