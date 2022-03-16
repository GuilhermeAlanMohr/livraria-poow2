import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API_URL = 'http://localhost:8080/livro/';

  constructor(private http: HttpClient) { }

  getLivros():Observable<Livro[]>{
    return this.http.get<Livro[]>(this.API_URL+'livros');
  }

  getLivro(id: number):Observable<Livro>{
    return this.http.get<Livro>(this.API_URL+'livro?codigo='+id);
  }

  cadastrarLivro(livro:Livro): Observable<string>{
    return this.http.post(this.API_URL+'cadastrar', livro, { responseType: "text" });
  }

  salvar(livro:Livro): Observable<string>{
    livro.setAtivo(true);
    if (livro.getCodigo()!=0) {
      return this.editarLivro(livro);
    }
    return this.cadastrarLivro(livro);
  }

  excluirLivro(id: number | undefined): Observable<string>{
    return this.http.delete(this.API_URL+'deletar?codigo='+id,{responseType: "text"});
  }

  editarLivro(livro:Livro): Observable<string>{
    return this.http.put(this.API_URL+'alterar',livro, { responseType: "text" });
  }

}
