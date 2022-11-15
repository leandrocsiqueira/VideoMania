import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeComponent } from './filme.component';

describe('MovieComponent', () => {
  let componenteFilme: FilmeComponent;
  let componenteFixture: ComponentFixture<FilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    componenteFixture = TestBed.createComponent(FilmeComponent);
    componenteFilme = componenteFixture.componentInstance;
    componenteFixture.detectChanges();
  });

  it('should create', () => {
    expect(componenteFilme).toBeTruthy();
  });
});
