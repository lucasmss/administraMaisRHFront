import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'cadastrar', component: FormClientesComponent},
    {path : 'cadastrar/:id', component: FormClientesComponent},
    {path : 'cadastrados', component: ListarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
