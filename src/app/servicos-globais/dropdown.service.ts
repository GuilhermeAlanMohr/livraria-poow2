import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './estado';
import { Cidade } from './cidade';
import { map, tap } from '../../../node_modules/rxjs/operators';
import { Genero } from '../livros/genero';
import { Editora } from '../editoras/editora';
import { Livro } from '../livros/livro';
import { Filial } from '../filiais/filial';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estado[]>('assets/dados/estados.json');
  }

  getEditoras() {
    return this.http.get<Editora[]>('assets/dados/editoras.json');
  }

  getFiliais() {
    return this.http.get<Filial[]>('assets/dados/filiais.json');
  }

  getLivros() {
    return this.http.get<Livro[]>('assets/dados/livros.json');
  }

  getGeneros() {
    return this.http.get<Genero[]>('assets/dados/generos.json');
  }

  getCidades(siglaEstado: string) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado === siglaEstado))
    );
  }

  getCidade(codigoCidade: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.codigo === codigoCidade))
    );
  }

  getGenero(codigo: number) {
    return this.http.get<Genero[]>('assets/dados/generos.json')
    .pipe(
      map((generos: Genero[]) => generos.filter(g => g.codigo === codigo))
    );
  }

  getEditora(codigo: number) {
    return this.http.get<Editora[]>('assets/dados/editoras.json')
    .pipe(
      map((editoras: Editora[]) => editoras.filter(e => e.codigo === codigo))
    );
  }

  getLivro(codigo: number) {
    return this.http.get<Livro[]>('assets/dados/livros.json')
    .pipe(
      map((livros: Livro[]) => livros.filter(l => l.codigo === codigo))
    );
  }

  getFilial(codigo: number) {
    return this.http.get<Filial[]>('assets/dados/filiais.json')
    .pipe(
      map((filiais: Filial[]) => filiais.filter(f => f.codigo === codigo))
    );
  }

}