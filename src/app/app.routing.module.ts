import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: 'livros',
      loadChildren: ()=> import('./livros/livros.module').then(m=> m.LivrosModule)
    },
    { path: 'editoras',
      loadChildren: ()=> import('./editoras/editoras.module').then(m=> m.EditorasModule)
    },
    { path: 'estoques',
      loadChildren: ()=> import('./estoques/estoques.module').then(m=> m.EstoquesModule)
    },
    { path: 'filiais',
      loadChildren: ()=> import('./filiais/filiais.module').then(m=> m.FiliaisModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
