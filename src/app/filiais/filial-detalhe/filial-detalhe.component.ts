import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FiliaisService } from '../filiais.service';

@Component({
  selector: 'app-filial-detalhe',
  templateUrl: './filial-detalhe.component.html',
  styleUrls: ['./filial-detalhe.component.css']
})
export class FilialDetalheComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();

  filial: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filiaisService: FiliaisService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.filial = this.filiaisService.getFilial(this.codigo);

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
    this.router.navigate(['/filiais', this.filial.codigo, 'editar']);
  }

}
