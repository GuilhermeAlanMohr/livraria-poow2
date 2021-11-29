import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estoque } from './estoque';
import { EstoquesService } from './estoques.service';

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

    this.estoques = this.estoquesService.getEstoques();

  }

  cadastrarEstoque(){
    this.router.navigate(['/estoques/cadastrar']);
  }

}
