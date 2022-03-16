import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownService } from '../servicos-globais/dropdown.service';

import { FiliaisComponent } from './filiais.component';
import { FiliaisService } from './service/filiais.service';
import { FilialDetalheComponent } from './filial-detalhe/filial-detalhe.component';
import { FilialFormComponent } from './filial-form/filial-form.component';
import { FiliaisRoutingModule } from './filial.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FiliaisRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    FilialDetalheComponent,
    FilialFormComponent,
    FiliaisComponent
  ],
  providers: [
    FiliaisService,
    DropdownService
  ]
})
export class FiliaisModule {}
