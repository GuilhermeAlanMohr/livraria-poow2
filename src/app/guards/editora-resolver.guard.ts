import { LivrosService } from './../livros/livros.service';
import { Livro } from 'src/app/livros/livro';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditoraResolverGuard implements Resolve<Livro> {

  constructor(private livrosService: LivrosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livro> {

    if (route.params && route.params['id']) {
      return this.livrosService.getLivro(route.params['id']);
    }

    return of({
      id: 0,
      nome: "",
      nomeAutor: "",
      valor: 0,
      editora: 0,
      genero: 0,
      ativo: false
    });

  }

}
