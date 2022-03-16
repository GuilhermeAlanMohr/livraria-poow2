import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from '../model/estoque';
import {Filial} from "../../filiais/model/filial";

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  private readonly API_URL = 'http://localhost:8080/estoque/';

  constructor(private http: HttpClient){}

  getEstoques():Observable<Estoque[]>{
    return this.http.get<Estoque[]>(this.API_URL+'estoques');
  }

  getEstoque(id: number):Observable<Estoque>{
    return this.http.get<Estoque>(this.API_URL+'estoque?codigo='+id);
  }

  salvar(estoque:Estoque): Observable<string>{
    estoque.setAtivo(true);
    if (estoque.getCodigo()!=0) {
      return this.editarEstoque(estoque);
    }
    return this.cadastrarEstoque(estoque);
  }

  cadastrarEstoque(estoque: Estoque): Observable<string>{
    return this.http.post(this.API_URL+'cadastrar', estoque, { responseType: 'text' });
  }

  excluirEstoque(codigo: number | undefined): Observable<string>{
    return this.http.delete(this.API_URL+'delete?codigo='+codigo, { responseType: 'text' });
  }

  editarEstoque(estoque:Estoque): Observable<string>{
    return this.http.put(this.API_URL+'alterar',estoque, { responseType: 'text' });
  }

}
