import { CommonModule } from '@angular/common';
import {ErrorHandler, NgModule} from '@angular/core';

import { LivrosService } from './service/livros.service';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivrosRoutingModule } from './livros.routing.module';
import { DropdownService } from '../servicos-globais/dropdown.service';
import { LivrosComponent } from './livros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtinterceptorService} from "../servicos-globais/jwtinterceptor.service";
import {ErrorhandlerService} from "../servicos-globais/errorhandler.service";

@NgModule({
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    LivrosComponent,
    LivroFormComponent,
    LivroDetalheComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorhandlerService},
    LivrosService,
    DropdownService
  ]
})
export class LivrosModule {}
