import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { EditoraDetalheComponent } from './editora-detalhe/editora-detalhe.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { EditorasComponent } from './editoras.component';



const editorasRoutes: Routes = [
    { path: '', component: EditorasComponent },
    { path: 'cadastrar', component: EditoraFormComponent },
    { path: ':id', component: EditoraDetalheComponent },
    { path: ':id/editar', component: EditoraFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(editorasRoutes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule {

}
