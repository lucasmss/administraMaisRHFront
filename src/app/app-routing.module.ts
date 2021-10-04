import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicoPrestadoFormComponent } from './servico-prestado/servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListarComponent } from './servico-prestado/servico-prestado-listar/servico-prestado-listar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: FormClientesComponent },
  { path: 'cadastrar/:id', component: FormClientesComponent },
  { path: 'cadastrados', component: ListarClientesComponent },
  { path: 'servico-prestado-form', component: ServicoPrestadoFormComponent },
  { path: 'servico-prestado-lista', component: ServicoPrestadoListarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
