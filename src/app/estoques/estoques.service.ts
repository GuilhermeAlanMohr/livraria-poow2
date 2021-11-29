import { Injectable } from '@angular/core';
import { Estoque } from './estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  estoques: Estoque[] = [
    {
      codigo: 1,
      filial: 1,
      livro: 2,
      quantidade: 23,
      ativo: true
    },
    {
      codigo: 2,
      filial: 3,
      livro: 1,
      quantidade: 16,
      ativo: true
    },
    {
      codigo: 3,
      filial: 1,
      livro: 2,
      quantidade: 38,
      ativo: true
    },
  ];

  getEstoques(){
    return this.estoques;
  }

  getEstoque(id: number){
    let editora = this.getEstoques();
    for(let i=0; i<this.estoques.length; i++){
      let estoque = this.estoques[i];
      if(estoque.codigo == id){
        return {
          "codigo":estoque.codigo,
          "livro":estoque.livro,
          "filial":estoque.filial,
          "quantidade":estoque.quantidade,
          "ativo":estoque.ativo
        };
      }
    }
    return null;
  }

  atualizaEstoques(estoques:Estoque[]){
    this.estoques = estoques;
  }

  addEstoque(livro:number, filial: number, quantidade: number){
    this.estoques.push({
      "codigo": this.estoques.length++,
      "livro":livro,
      "filial":filial,
      "quantidade":quantidade,
      "ativo":true
    });
  }

  excluirEstoque(estoque:Estoque){
    for(let est of this.estoques){
      if(estoque.codigo == est.codigo){
        this.estoques.pop();
      }
    }
  }

  editarEstoque(estoque:Estoque){
    for(let est of this.estoques){
      if(estoque.codigo == est.codigo){
        this.estoques.pop();
        this.estoques.push(estoque);
      }
    }
  }
}
