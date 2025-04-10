import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro.component';
import { ListaComponent } from './lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  declarations: [AppComponent, CadastroComponent, ListaComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
