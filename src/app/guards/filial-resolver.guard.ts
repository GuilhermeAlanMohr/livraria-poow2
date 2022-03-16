import { FiliaisService } from '../filiais/service/filiais.service';
import { Filial } from 'src/app/filiais/model/filial';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilialResolverGuard implements Resolve<Filial> {

  constructor(private filiaisService: FiliaisService) {}
  filial: Filial = new Filial();

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Filial {

    if (route.params && route.params['id']) {
      this.filiaisService.getFilial(route.params['id']).subscribe(fi=> {
        this.filial = fi;
      });
    }

    return this.filial;

  }

}
