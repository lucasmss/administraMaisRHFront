import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private service: ClientesService,
    private router: Router) {
     this.cliente = new Clientes();
   }

  ngOnInit(): void {
    this.cliente = new Clientes();
  }

  salvar(){
    this.service.salvarCliente(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = null;
      this.cliente = response;
    }, errorResponse => {
      this.success= false;
      this.errors = errorResponse.error.erros;  
    } );
  }

  voltar(){
    this.router.navigate(['/cadastrados']);
  }

}
