import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filial } from '../model/filial';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiliaisService {

  constructor(private http: HttpClient) { }

  private readonly API_URL = 'http://localhost:8080/filial/';

  getFiliais(): Observable<Filial[]>{
    return this.http.get<Filial[]>(this.API_URL+'filiais');
  }

  getFilial(id: number): Observable<Filial>{
    return this.http.get<Filial>(this.API_URL+'filial?codigo='+id);
  }

  salvar(filial:Filial):Observable<string> {
    filial.setAtiva(true);
    if (filial.getCodigo()!=0) {
      return this.editarFilial(filial);
    }
    return this.cadastrarFilial(filial);
  }

  cadastrarFilial(filial: Filial): Observable<string>{
    return this.http.post(this.API_URL+'cadastrar', filial, { responseType: "text" });
  }

  excluirFilial(codigo: number | undefined): Observable<string>{
    return this.http.delete(this.API_URL+'delete?codigo='+codigo,{ responseType: "text" });
  }

  editarFilial(filial: Filial): Observable<string>{
    return this.http.put(this.API_URL+'alterar', filial, { responseType: "text" });
  }

}
