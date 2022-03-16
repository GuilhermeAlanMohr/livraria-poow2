import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './model/estado';
import { Cidade } from './model/cidade';
import { map, tap } from '../../../node_modules/rxjs/operators';
import { Genero } from '../livros/model/genero';
import { Editora } from '../editoras/model/editora';
import { Livro } from '../livros/model/livro';
import { Filial } from '../filiais/model/filial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getEstados():Observable<Estado[]>{
    return this.http.get<Estado[]>(this.API_URL+'filial/estados');
  }

  getEditoras():Observable<Editora[]> {
    return this.http.get<Editora[]>(this.API_URL+'editora/editoras');
  }

  getFiliais():Observable<Filial[]> {
    return this.http.get<Filial[]>(this.API_URL+'filial/filiais');
  }

  getLivros():Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API_URL+'livro/livros');
  }

  getGeneros():Observable<Genero[]> {
    return this.http.get<Genero[]>(this.API_URL+'livro/generos');
  }

  getCidades(siglaEstado: string): Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.API_URL+'filial/cidades')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.getEstado()?.getSigla() === siglaEstado))
    );
  }

  getCidade(codigo: number | undefined): Observable<Cidade> {
    return this.http.get<Cidade>(this.API_URL+'filial/cidade?codigo='+codigo);
  }

  getGenero(codigo: number | undefined): Observable<Genero> {
    return this.http.get<Genero>(this.API_URL+'livro/genero?codigo='+codigo)
  }

  getEditora(codigo: number | undefined): Observable<Editora> {
    return this.http.get<Editora>(this.API_URL+'editora?codigo='+codigo);
  }

  getLivro(codigo: number | undefined): Observable<Livro> {
    return this.http.get<Livro>(this.API_URL+'livro?codigo='+codigo);
  }

  getFilial(codigo: number | undefined): Observable<Filial> {
    return this.http.get<Filial>(this.API_URL+'filial?codigo='+codigo);
  }

}
