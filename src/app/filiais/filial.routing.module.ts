import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { FilialDetalheComponent } from './filial-detalhe/filial-detalhe.component';
import { FilialFormComponent } from './filial-form/filial-form.component';
import { FiliaisComponent } from './filiais.component';



const filiaisRoutes: Routes = [
    { path: '', component: FiliaisComponent },
    { path: 'cadastrar', component: FilialFormComponent },
    { path: ':id', component: FilialDetalheComponent },
    { path: ':id/editar', component: FilialFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(filiaisRoutes)],
  exports: [RouterModule]
})
export class FiliaisRoutingModule {

}
