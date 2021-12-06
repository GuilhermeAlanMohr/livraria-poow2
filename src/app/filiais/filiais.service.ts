import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Filial } from './filial';

@Injectable({
  providedIn: 'root'
})
export class FiliaisService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/estoques';

  filiais: Filial[] = [
    {
      id: 1,
      nome: "Filial 1",
      telefone: "(51) 99004-1000",
      email: "filial@gmail.com",
      endereco: "Rua Ruperti Filho 2578",
      cidade: 22,
      ativa: true,
    },
    {
      id: 2,
      nome: "Filial 2",
      telefone: "(51) 99004-1000",
      email: "filial2@gmail.com",
      endereco: "Rua Barão do Triunfo 2142",
      cidade: 102,
      ativa: true,
    },
    {
      id: 3,
      nome: "Filial 3",
      telefone: "(51) 96067-5140",
      email: "filial3@hotmail.com",
      endereco: "Rua Visconde da Graça 2018",
      cidade: 50,
      ativa: false,
    },
  ];

  getFiliais(){
    return this.http.get<Filial[]>(this.API);
  }

  getFilial(id: number){
    return this.http.get<Filial>(`${this.API}/${id}`).pipe(take(1));
  }

  addEditora(nome:string, email: string, endereco:string, telefone: string, cidade:number){
    this.filiais.push({
      "id": this.filiais.length++,
      "nome":nome,
      "telefone":telefone,
      "email":email,
      "endereco":endereco,
      "cidade":cidade,
      "ativa":true
    });
  }

  excluirFilial(filial:Filial){
    for(let fil of this.filiais){
      if(filial.id == fil.id){
        this.filiais.pop();
      }
    }
  }

  editarFilial(filial:Filial){
    for(let fil of this.filiais){
      if(filial.id == fil.id){
        this.filiais.pop();
        this.filiais.push(filial);
      }
    }
  }

}
