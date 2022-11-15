import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('HomeComponent', () => {
  let componente: InicioComponent;
  let componenteFixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    componenteFixture = TestBed.createComponent(InicioComponent);
    componente = componenteFixture.componentInstance;
    componenteFixture.detectChanges();
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
