import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Estoque} from "../estoques/model/estoque";
import {EstoquesService} from "../estoques/service/estoques.service";

@Injectable({
  providedIn: 'root'
})
export class EstoqueResolverGuard implements Resolve<Estoque> {

  constructor(private estoquesService: EstoquesService) {}
  estoque: Estoque = new Estoque();

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Estoque {

    if (route.params && route.params['id']) {
      this.estoquesService.getEstoque(route.params['id']).subscribe(est => {
        this.estoque = est;
      });
    }
    return this.estoque;
  }

}
