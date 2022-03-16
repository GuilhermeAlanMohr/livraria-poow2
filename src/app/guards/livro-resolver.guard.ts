import { LivrosService } from '../livros/service/livros.service';
import { Livro } from 'src/app/livros/model/livro';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LivroResolverGuard implements Resolve<Livro> {

  constructor(private livrosService: LivrosService) {}
  livro: Livro = new Livro();

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Livro {

    if (route.params && route.params['id']) {
      this.livrosService.getLivro(route.params['id']).subscribe(li=> {
        this.livro = li;
      });
    }

    return this.livro;

  }

}
