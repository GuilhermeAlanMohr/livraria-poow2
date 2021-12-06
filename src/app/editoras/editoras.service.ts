import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  constructor() { }

  private readonly API = 'http://localhost:3000/editoras';
  editoras: Editora[] = [
    {
      id: 1,
      nome: "Editora 1",
      telefone: "(51) 99004-1000",
      email: "edit@gmail.com",
      endereco: "Rua Ruperti Filho 2578",
      cidade: 22,
      ativa: true,
    },
    {
      id: 2,
      nome: "Editora 2",
      telefone: "(51) 99004-1000",
      email: "edit2@gmail.com",
      endereco: "Rua Barão do Triunfo 2142",
      cidade: 102,
      ativa: true,
    },
    {
      id: 3,
      nome: "Editora 3",
      telefone: "(51) 96067-5140",
      email: "edit2@hotmail.com",
      endereco: "Rua Visconde da Graça 2018",
      cidade: 50,
      ativa: false,
    },
  ];

  getEditoras(){
    return this.editoras;
  }

  getEditora(id: number){
    let editora = this.getEditoras();
    for(let i=0; i<this.editoras.length; i++){
      let editora = this.editoras[i];
      if(editora.id == id){
        return {
          "id":editora.id,
          "nome":editora.nome,
          "telefone":editora.telefone,
          "email":editora.email,
          "endereco":editora.endereco,
          "cidade":editora.cidade,
          "ativa":editora.ativa
        };
      }
    }
    return null;
  }

  atualizaEditoras(editoras:Editora[]){
    this.editoras = editoras;
  }

  addEditora(nome:string, email: string, endereco:string, telefone: string, cidade:number){
    this.editoras.push({
      "id": this.editoras.length++,
      "nome":nome,
      "telefone":telefone,
      "email":email,
      "endereco":endereco,
      "cidade":cidade,
      "ativa":true
    });
  }

  excluirEditora(editora:Editora){
    for(let edit of this.editoras){
      if(editora.id == edit.id){
        this.editoras.pop();
      }
    }
  }

  editarEditora(editora:Editora){
    for(let edit of this.editoras){
      if(editora.id == edit.id){
        this.editoras.pop();
        this.editoras.push(editora);
      }
    }
  }

}
