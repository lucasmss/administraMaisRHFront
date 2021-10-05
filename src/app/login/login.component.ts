import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string;
  password: string;
  loginErro: boolean;
  cadastrando: boolean;
  

  constructor() { }

  entrar(){
    
  }

  cadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

}
