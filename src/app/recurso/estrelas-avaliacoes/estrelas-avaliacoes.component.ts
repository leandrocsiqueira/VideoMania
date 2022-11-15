import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrelas-avaliacoes',
  templateUrl: './estrelas-avaliacoes.component.html',
  styleUrls: ['./estrelas-avaliacoes.component.scss']
})
export class EstrelasAvaliacoesComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
