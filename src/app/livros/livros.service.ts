import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) { }

  getLivros(){
    return this.http.get<Livro[]>(this.API);
  }

  getLivro(id: number){
    return this.http.get<Livro>(`${this.API}/${id}`).pipe(take(1));
  }

  addLivro(livro:Livro){
    const addLivro = {
      "nome":livro.nome,
      "nomeAutor":livro.nomeAutor,
      "valor":livro.valor,
      "editora":livro.editora,
      "genero":livro.genero,
      "ativo":true
    }
    return this.http.post(this.API, addLivro).pipe(take(1));
  }

  salvar(livro:Livro) {
    livro.ativo = true;
    if (livro.id!=0) {
      return this.editarLivro(livro);
    }
    return this.addLivro(livro);
  }

  excluirLivro(id:number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  editarLivro(livro:Livro){
    return this.http.put(`${this.API}/${livro.id}`, livro).pipe(take(1))
  }

}
