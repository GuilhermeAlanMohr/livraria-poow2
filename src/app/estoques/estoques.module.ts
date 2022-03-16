import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EstoquesService } from './service/estoques.service';
import { EstoqueFormComponent } from './estoque-form/estoque-form.component';
import { EstoqueDetalheComponent } from './estoque-detalhe/estoque-detalhe.component';
import { EstoquesComponent } from './estoques.component';
import { EstoquesRoutingModule } from './estoques.routing.module';
import { DropdownService } from '../servicos-globais/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EstoquesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    EstoquesComponent,
    EstoqueFormComponent,
    EstoqueDetalheComponent
  ],
  providers: [
    EstoquesService,
    DropdownService
  ]
})
export class EstoquesModule {}
