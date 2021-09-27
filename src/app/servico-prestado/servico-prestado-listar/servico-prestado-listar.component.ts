import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/shared/models/clientes/clientes';
import { Servicos } from 'src/app/shared/models/servicos/servicos';
import { ServicosBuscar } from 'src/app/shared/models/servicos/servicos-buscar';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-servico-prestado-listar',
  templateUrl: './servico-prestado-listar.component.html',
  styleUrls: ['./servico-prestado-listar.component.css']
})
export class ServicoPrestadoListarComponent implements OnInit {

  nome: string;
  mes: number;
  listaServico: ServicosBuscar[];
  meses: number[];
  clientes: Clientes[] = [];
  servicos: Servicos;
  message: string;

  constructor(
    private clientesService: ClientesService, 
    private servicoService: ServicosService
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.servicos = new Servicos();
  }

  ngOnInit(): void {
    this.clientesService.getListarClientes()
        .subscribe(response => {
          this.clientes = response;
        })
    
  }

  buscarServicos(){
    this.servicoService.getServicos(this.nome, this.mes)
        .subscribe(
          response => {
            this.listaServico = response;
            if(this.listaServico.length <= 0){
              this.message = "Nenhum registro encontrado."
            }
            else{
              this.message = "";
            }
          }
        )

  }

}
