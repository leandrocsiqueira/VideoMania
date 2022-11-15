import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutorizacaoService {
  constructor(private rota: Router) {}

  login(usuario: string, senha: string) {
    if (usuario === 'admin' && senha === '1234') return 200;
    else return 403;
  }

  logout() {
    this.rota.navigate(['login']);
  }
}
