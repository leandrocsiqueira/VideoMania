import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelasAvaliacoesComponent } from './estrelas-avaliacoes.component';

describe('StarRatingComponent', () => {
  let component: EstrelasAvaliacoesComponent;
  let fixture: ComponentFixture<EstrelasAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrelasAvaliacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelasAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
