import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { EstoqueDetalheComponent } from './estoque-detalhe/estoque-detalhe.component';
import { EstoqueFormComponent } from './estoque-form/estoque-form.component';
import { EstoquesComponent } from './estoques.component';



const estoquesRoutes: Routes = [
    { path: '', component: EstoquesComponent },
    { path: 'cadastrar', component: EstoqueFormComponent },
    { path: ':id', component: EstoqueDetalheComponent },
    { path: ':id/editar', component: EstoqueFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(estoquesRoutes)],
  exports: [RouterModule]
})
export class EstoquesRoutingModule {

}
