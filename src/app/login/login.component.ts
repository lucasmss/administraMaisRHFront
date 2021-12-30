import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/models/usuario/usuario';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string;
  password: string;
  loginErro: boolean;
  mensagemSucesso: string;
  cadastrando: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  entrar(){
    this.router.navigate(['/home']);    
  }
  
  cadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

  cadastrarUsuario(){
    const usuario: Usuario = new Usuario();
    usuario.usuario = this.usuario;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso!";
          this.loginErro = null;
        }, error => {
          this.mensagemSucesso = null;
          this.loginErro = true;
        })
  }

}
