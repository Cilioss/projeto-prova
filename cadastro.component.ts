import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  template: `
    <h2>Cadastro de Aluno</h2>
    <form (ngSubmit)="cadastrar()">
      <input [(ngModel)]="nome" name="nome" placeholder="Nome" required>
      <button type="submit">Cadastrar</button>
    </form>
  `
})
export class CadastroComponent {
  nome = '';

  cadastrar() {
    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    alunos.push(this.nome);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    this.nome = '';
    alert('Aluno cadastrado!');
  }
}
