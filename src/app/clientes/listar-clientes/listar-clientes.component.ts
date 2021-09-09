import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Clientes[] = [];

  constructor(
    private service: ClientesService,
    private router: Router ) {}

  ngOnInit(): void {
    this.clientesCadastrados();
  }

  clientesCadastrados(){
    this.service.listarClientes()
        .subscribe(response => {
          return this.clientes = response;
        })
  }

  cadastrar(){
    this.router.navigate(['/cadastrar']);
  }

}
