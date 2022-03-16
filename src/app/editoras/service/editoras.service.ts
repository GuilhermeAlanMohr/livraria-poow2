import { Injectable } from '@angular/core';
import { Editora } from '../model/editora';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  constructor(private http: HttpClient) { }

  private readonly API_URL = 'http://localhost:8080/editora/';

  getEditoras(): Observable<Editora[]>{
    return this.http.get<Editora[]>(this.API_URL+'editoras');
  }

  getEditora(id: number): Observable<Editora>{
    return this.http.get<Editora>(this.API_URL+'editora?codigo='+id);
  }

  cadastrarEditora(editora:Editora):Observable<string>{
    return this.http.post(this.API_URL+'cadastrar',editora,{responseType: 'text'});
  }

  excluirEditora(codigo: number | undefined):Observable<string>{
    return this.http.delete(this.API_URL+'deletar?codigo='+codigo,{responseType: 'text'});
  }

  salvar(editora:Editora):Observable<string> {
    editora.setAtiva(true);
    if (editora.getCodigo()!=0) {
      return this.editarEditora(editora);
    }
    return this.cadastrarEditora(editora);
  }

  editarEditora(editora:Editora):Observable<string>{
    return this.http.put(this.API_URL+'alterar',editora,{responseType: 'text'});
  }

}
