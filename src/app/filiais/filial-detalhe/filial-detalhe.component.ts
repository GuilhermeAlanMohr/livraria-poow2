import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FiliaisService } from '../service/filiais.service';
import {Filial} from "../model/filial";

@Component({
  selector: 'app-filial-detalhe',
  templateUrl: './filial-detalhe.component.html',
  styleUrls: ['./filial-detalhe.component.css']
})
export class FilialDetalheComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();

  filial: Filial = new Filial();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filiaisService: FiliaisService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.filiaisService.getFilial(this.codigo).subscribe(fi => {
          this.filial = fi;
        });

        if(this.filial == null){
          console.log("Filial não encontrada");
          this.router.navigate(['/editoras']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarFilial(){
    this.router.navigate(['/filiais', this.filial.getCodigo(), 'editar']);
  }

}
