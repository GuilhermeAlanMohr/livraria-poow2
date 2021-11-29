import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivrosComponent } from './livros.component';



const livrosRoutes: Routes = [
    { path: '', component: LivrosComponent },
    { path: 'cadastrar', component: LivroFormComponent },
    { path: ':id', component: LivroDetalheComponent },
    { path: ':id/editar', component: LivroFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {

}
