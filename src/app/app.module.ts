import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { CardComponent } from './components/card/card.component';
import { HeaderFooterFormaterDirective } from './components/card/header-footer-formater.directive';
import { BreadcrumbComponent } from './components/template/breadcrumb/breadcrumb.component';
import { ListagemComponent } from './components/views/listagem/listagem.component';
import { AddItemModalComponent } from './components/cadastro/itens-tab/add-item-modal/add-item-modal.component';
import { UpdateItemModalComponent } from './components/cadastro/itens-tab/update-item-modal/update-item-modal.component';
import { DeleteItemModalComponent } from './components/cadastro/itens-tab/delete-item-modal/delete-item-modal.component';
import { ContratoItensComponent } from './components/views/contrato-itens/contrato-itens.component';
import { DetailModalComponent } from './components/views/listagem/detail-modal/detail-modal.component';

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
    CardComponent,
    HeaderFooterFormaterDirective,
    BreadcrumbComponent,
    ListagemComponent,
    AddItemModalComponent,
    UpdateItemModalComponent,
    DeleteItemModalComponent,
    ContratoItensComponent,
    DetailModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
