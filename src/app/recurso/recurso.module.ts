import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstrelasAvaliacoesComponent } from './estrelas-avaliacoes/estrelas-avaliacoes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ EstrelasAvaliacoesComponent ],
  imports: [ CommonModule, NgbModule ],
  exports: [ EstrelasAvaliacoesComponent ]
})
export class Recurso { }
