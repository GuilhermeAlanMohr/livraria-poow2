import { LivrosService } from './../livros/livros.service';
import { Livro } from 'src/app/livros/livro';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FiliaisService } from '../filiais/filiais.service';
import { Filial } from '../filiais/filial';

@Injectable({
  providedIn: 'root'
})
export class FilialResolverGuard implements Resolve<Filial> {

  constructor(private filiaisService: FiliaisService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filial> {

    if (route.params && route.params['id']) {
      return this.filiaisService.getFilial(route.params['id']);
    }

    return of({
      id : 0,
      nome : "",
      telefone : "",
      email : "",
      endereco : "",
      cidade : 0,
      ativa : false
    });

  }

}
