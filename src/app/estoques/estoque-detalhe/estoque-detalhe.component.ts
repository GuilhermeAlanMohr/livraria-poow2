import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstoquesService } from '../service/estoques.service';
import {Estoque} from "../model/estoque";

@Component({
  selector: 'app-estoque-detalhe',
  templateUrl: './estoque-detalhe.component.html',
  styleUrls: ['./estoque-detalhe.component.css']
})
export class EstoqueDetalheComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();

  estoque: Estoque = new Estoque();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estoquesService: EstoquesService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.estoquesService.getEstoque(this.codigo).subscribe(est => {
          this.estoque = est;
        });

        if(this.estoque == null){
          console.log("Item do Estoque não encontrado");
          this.router.navigate(['/estoques']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarEstoque(){
    this.router.navigate(['/estoques', this.estoque.getCodigo(), 'editar']);
  }

}
