import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AuthGuardService} from "./guards/auth-guard.service";

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuardService]
  },
  { path: 'livros',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./livros/livros.module').then(m=> m.LivrosModule)
  },
  { path: 'editoras',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./editoras/editoras.module').then(m=> m.EditorasModule)
  },
  { path: 'estoques',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./estoques/estoques.module').then(m=> m.EstoquesModule)
  },
  { path: 'filiais',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./filiais/filiais.module').then(m=> m.FiliaisModule)
  },
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
