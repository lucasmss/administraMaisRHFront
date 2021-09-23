import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Clientes[] = [];
  success: boolean = false;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getListarClientes()
        .subscribe(response => {
          this.clientes = response;
        })
  }

  salvarServico(){

  }

}
