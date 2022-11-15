import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoteamentoModule } from './app-roteamento.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Recurso } from './recurso/recurso.module';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FilmeComponent } from './filme/filme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    CabecalhoComponent,
    FilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoteamentoModule,
    FormsModule,
    HttpClientModule,
    Recurso,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
