import { TestBed } from '@angular/core/testing';

import { AutorizacaoService } from './auth.service';

describe('AutorizacaoService', () => {
  let servico: AutorizacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servico = TestBed.inject(AutorizacaoService);
  });

  it('deve ser criado', () => {
    expect(servico).toBeTruthy();
  });
});
