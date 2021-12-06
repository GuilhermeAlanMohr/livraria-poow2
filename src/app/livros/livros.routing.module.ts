import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivrosComponent } from './livros.component';
import { LivroResolverGuard } from './../guards/livro-resolver.guard';

const livrosRoutes: Routes = [
  { path: '', component: LivrosComponent },
  { path: 'cadastrar', component: LivroFormComponent,
    resolve: {
      livro: LivroResolverGuard
    }
  },
  { path: ':id', component: LivroDetalheComponent,
    resolve: {
      livro: LivroResolverGuard
    }
  },
  { path: ':id/editar', component: LivroFormComponent,
    resolve: {
      livro: LivroResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}
