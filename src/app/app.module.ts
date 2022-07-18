import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { ServicoPrestadoFormComponent } from './servico-prestado/servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListarComponent } from './servico-prestado/servico-prestado-listar/servico-prestado-listar.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './shared/services/auth.service';
import { ClientesService } from 'shared/services/clientes.service';
import { ServicosService } from 'shared/services/servicos.service';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormClientesComponent,
    ListarClientesComponent,
    ServicoPrestadoFormComponent,
    ServicoPrestadoListarComponent,
    LoginComponent,
    LayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
