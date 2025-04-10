import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  template: `
    <h2>Lista de Alunos</h2>
    <ul>
      <li *ngFor="let aluno of alunos">{{ aluno }}</li>
    </ul>
  `
})
export class ListaComponent implements OnInit {
  alunos: string[] = [];

  ngOnInit() {
    this.alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
  }
}
