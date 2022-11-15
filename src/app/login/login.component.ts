import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacaoService } from '../servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = "";
  senha = "";
  mensagemErro = "";

  constructor(private autorizacao: AutorizacaoService, private rota: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.usuario.trim().length === 0) this.mensagemErro = "Informe o seu usuário";
    else if (this.senha.trim().length === 0) this.mensagemErro = "Informe a sua senha";
    else {
      this.mensagemErro = "";
      const codigoHttp = this.autorizacao.login(this.usuario, this.senha);
      if (codigoHttp === 200) this.rota.navigate(['inicio']);
      if (codigoHttp === 403) this.mensagemErro = "Credenciais inválidas";
    }
  }

}
