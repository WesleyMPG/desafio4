import { ListagemComponent } from './components/views/listagem/listagem.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'listagem',
    component: ListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
