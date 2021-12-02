import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { GeralTabComponent } from './components/cadastro/geral-tab/geral-tab.component';
import { ItensTabComponent } from './components/cadastro/itens-tab/itens-tab.component';
import { ProjetosTabComponent } from './components/cadastro/projetos-tab/projetos-tab.component';
import { ModalComponent } from './components/modal/modal.component';
import { CloseBtnStyleDirective } from './components/modal/close-btn-style.directive';
import { ModalSizeDirective } from './components/modal/modal-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CadastroComponent,
    GeralTabComponent,
    ItensTabComponent,
    ProjetosTabComponent,
    ModalComponent,
    CloseBtnStyleDirective,
    ModalSizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
