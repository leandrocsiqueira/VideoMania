import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss'],
})
export class FilmeComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private rotaAtivada: ActivatedRoute, private clienteHttp: HttpClient) {}

  ngOnInit(): void {
    this.type = this.rotaAtivada.snapshot.params['type'];
    this.id = this.rotaAtivada.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.buscarFilme();
  }

  buscarFilme() {
    this.clienteHttp.get(this.url).subscribe((filmes) => {
      this.movies = filmes;
      let posicao = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (posicao > -1) {
        this.movie = this.movies[posicao];
      }
    });
  }
}
