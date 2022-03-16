import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { EditoraDetalheComponent } from './editora-detalhe/editora-detalhe.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { EditorasComponent } from './editoras.component';
import {LivroResolverGuard} from "../guards/livro-resolver.guard";
import {EditoraResolverGuard} from "../guards/editora-resolver.guard";



const editorasRoutes: Routes = [
    { path: '', component: EditorasComponent },
    { path: 'cadastrar', component: EditoraFormComponent,
      resolve: {
        editora: EditoraResolverGuard
      }
    },
    { path: ':id', component: EditoraDetalheComponent,
      resolve: {
        editora: EditoraResolverGuard
      }
    },
    { path: ':id/editar', component: EditoraFormComponent,
      resolve: {
        editora: EditoraResolverGuard
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(editorasRoutes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule {

}
