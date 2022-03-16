import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Editora} from "../editoras/model/editora";
import {EditorasService} from "../editoras/service/editoras.service";
import {Cidade} from "../servicos-globais/model/cidade";
import {Estado} from "../servicos-globais/model/estado";

@Injectable({
  providedIn: 'root'
})
export class EditoraResolverGuard implements Resolve<Editora> {

  constructor(private editorasService: EditorasService) {}
  editora: Editora = new Editora();

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Editora {

    if (route.params && route.params['id']) {
      this.editorasService.getEditora(route.params['id']).subscribe(ed => {
        this.editora = ed;
      });
    }
    return this.editora;
  }

}
