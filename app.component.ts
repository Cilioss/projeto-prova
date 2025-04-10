import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Gestão de Alunos</h1>
    <nav>
      <a routerLink="/lista">Lista</a> |
      <a routerLink="/cadastro">Cadastro</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
