import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor() { }

  livros: Livro[] = [
    {
      codigo: 1,
      nome: "Livro 1",
      nomeAutor: "João",
      valor: 20.90,
      editora: 2,
      genero: 2,
      ativo: true
    },
    {
      codigo: 2,
      nome: "Livro 2",
      nomeAutor: "Paulo",
      valor: 35.50,
      editora: 1,
      genero: 5,
      ativo: false
    },
    {
      codigo: 3,
      nome: "Livro 3",
      nomeAutor: "Pedro",
      valor: 19.99,
      editora: 1,
      genero: 18,
      ativo: true
    },
  ];

  getLivros(){
    return this.livros;
  }

  getLivro(id: number){
    let livro = this.getLivros();
    for(let i=0; i<this.livros.length; i++){
      let livro = this.livros[i];
      if(livro.codigo == id){
        return {
          codigo: livro.codigo,
          nome: livro.nome,
          nomeAutor: livro.nomeAutor,
          valor: livro.valor,
          editora: livro.editora,
          genero: livro.genero,
          ativo: livro.genero
        };
      }
    }
    return null;
  }

  atualizaLivros(livros:Livro[]){
    this.livros = livros;
  }

  addLivro(nome:string, nomeAutor: string, valor:number, editora: number, genero:number){
    this.livros.push({
      "codigo": this.livros.length++,
      "nome":nome,
      "nomeAutor":nomeAutor,
      "valor":valor,
      "editora":editora,
      "genero":genero,
      "ativo":true
    });
  }

  excluirLivro(livro:Livro){
    for(let li of this.livros){
      if(livro.codigo == li.codigo){
        this.livros.pop();
      }
    }
  }

  editarLivro(livro:Livro){
    for(let li of this.livros){
      if(livro.codigo == li.codigo){
        this.livros.pop();
        this.livros.push(livro);
      }
    }
  }

}
