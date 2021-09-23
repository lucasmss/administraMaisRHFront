import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { Servicos } from 'src/app/shared/models/servicos/servicos';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Clientes[] = [];
  servicos: Servicos;
  success: boolean = false;

  constructor(
    private clientesService: ClientesService,
    private servicoService: ServicosService
    ) { 
    this.servicos = new Servicos();
  }

  ngOnInit(): void {
    this.clientesService.getListarClientes()
        .subscribe(response => {
          this.clientes = response;
        })
  }

  salvarServico(){
    console.log(this.servicos);
    this.servicos.data = "10/02/2021"
    this.servicoService.postSalvarServico(this.servicos)
        .subscribe(
          response => {
            console.log(response);
          }
          
        )
  }

}
