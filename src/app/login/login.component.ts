import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Usuario } from '../shared/models/usuario/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  errors: String[];
  mensagemSucesso: string;
  cadastrando: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  entrar(){
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response => {
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          console.log(response);
          this.router.navigate(['/home']); 
        }, errorResponse => {
          this.errors = ['Usuário e/ou senha incorreto']
        })  
  }
  
  cadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

  cadastrarUsuario(){
    const username: Usuario = new Usuario();
    username.username = this.username;
    username.password = this.password;
    this.authService
        .salvar(username)
        .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso!";
          this.cadastrando = false;
          this.username = '';
          this.password = '';
          this.errors = [];
        }, errorResponse => {
          this.mensagemSucesso = null;
          this.errors = errorResponse.error.erros;  
        })
  }

}
