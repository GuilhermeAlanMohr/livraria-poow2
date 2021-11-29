import { Injectable } from '@angular/core';
import { Filial } from './filial';

@Injectable({
  providedIn: 'root'
})
export class FiliaisService {

  constructor() { }

  filiais: Filial[] = [
    {
      codigo: 1,
      nome: "Filial 1",
      telefone: "(51) 99004-1000",
      email: "filial@gmail.com",
      endereco: "Rua Ruperti Filho 2578",
      cidade: 22,
      ativa: true,
    },
    {
      codigo: 2,
      nome: "Filial 2",
      telefone: "(51) 99004-1000",
      email: "filial2@gmail.com",
      endereco: "Rua Barão do Triunfo 2142",
      cidade: 102,
      ativa: true,
    },
    {
      codigo: 3,
      nome: "Filial 3",
      telefone: "(51) 96067-5140",
      email: "filial3@hotmail.com",
      endereco: "Rua Visconde da Graça 2018",
      cidade: 50,
      ativa: false,
    },
  ];

  getFiliais(){
    return this.filiais;
  }

  getFilial(id: number){
    let editora = this.getFiliais();
    for(let i=0; i<this.filiais.length; i++){
      let filial = this.filiais[i];
      if(filial.codigo == id){
        return {
          "codigo":filial.codigo,
          "nome":filial.nome,
          "telefone":filial.telefone,
          "email":filial.email,
          "endereco":filial.endereco,
          "cidade":filial.cidade,
          "ativa":filial.ativa
        };
      }
    }
    return null;
  }

  atualizaFilial(filiais:Filial[]){
    this.filiais = filiais;
  }

  addEditora(nome:string, email: string, endereco:string, telefone: string, cidade:number){
    this.filiais.push({
      "codigo": this.filiais.length++,
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
      if(filial.codigo == fil.codigo){
        this.filiais.pop();
      }
    }
  }

  editarFilial(filial:Filial){
    for(let fil of this.filiais){
      if(filial.codigo == fil.codigo){
        this.filiais.pop();
        this.filiais.push(filial);
      }
    }
  }

}
