import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  filmesTendencias: any;
  filmesTeatro: any;
  filmesPopulares: any;

  constructor(private clienteHttp: HttpClient, private rota: Router) {}

  ngOnInit(): void {
    this.buscarFilmesTendencias();
    this.buscarFilmesTeatro();
    this.buscarFilmesPopulares();
  }

  buscarFilmesTendencias() {
    this.clienteHttp
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((filmes) => {
        this.filmesTendencias = filmes;
      });
  }

  buscarFilmesTeatro() {
    this.clienteHttp
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((filmes) => {
        this.filmesTeatro = filmes;
      });
  }

  buscarFilmesPopulares() {
    this.clienteHttp
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((filmes) => {
        this.filmesPopulares = filmes;
      });
  }

  irParaFilme(tipo: string, id: string) {
    this.rota.navigate(['movie', tipo, id]);
  }

}
