import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacaoService } from '../servicos/auth.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  constructor(private rota: Router, private autorizacao: AutorizacaoService) {}

  ngOnInit(): void {}

  irParaInicio() {
    this.rota.navigate(['inicio']);
  }

  sair() {
    this.autorizacao.logout();
  }
}
