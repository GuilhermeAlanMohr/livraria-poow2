import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estoque } from './model/estoque';
import { EstoquesService } from './service/estoques.service';

@Component({
  selector: 'app-estoques',
  templateUrl: './estoques.component.html',
  styleUrls: ['./estoques.component.css']
})
export class EstoquesComponent implements OnInit {

  estoques: Estoque[] = [];

  constructor(
    private estoquesService: EstoquesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getEstoques();

  }

  getEstoques(){
    this.estoquesService.getEstoques().subscribe(est => {
      this.estoques = est;
    });
  }

  verificarEstoque(id: number | undefined){
    this.router.navigate(["estoques/",id]);
  }

  excluirEstoque(id: number | undefined){
    console.log("Código: ",id);
    this.estoquesService.excluirEstoque(id).subscribe(msg => {
      console.log(msg),
      alert(msg)
    });
  }

}
