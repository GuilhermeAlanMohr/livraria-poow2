import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorasService } from './service/editoras.service';
import { DropdownService } from '../servicos-globais/dropdown.service';
import { EditoraDetalheComponent } from './editora-detalhe/editora-detalhe.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { EditorasRoutingModule } from './editora.routing.module';
import { EditorasComponent } from './editoras.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorasRoutingModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    EditorasComponent,
    EditoraDetalheComponent,
    EditoraFormComponent
  ],
  providers: [
    EditorasService,
    DropdownService
  ]
})
export class EditorasModule {}
