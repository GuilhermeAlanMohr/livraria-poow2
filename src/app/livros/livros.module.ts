import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LivrosService } from './livros.service';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivrosRoutingModule } from './livros.routing.module';
import { DropdownService } from '../servicos-globais/dropdown.service';
import { LivrosComponent } from './livros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    LivrosService,
    DropdownService
  ]
})
export class LivrosModule {}
