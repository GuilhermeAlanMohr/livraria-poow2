import { Editora } from "src/app/editoras/model/editora";
import { Genero } from "./genero";

export class Livro{

  private codigo: number | undefined;
  private nome: string | undefined;
  private nomeAutor: string | undefined;
  private valor: number | undefined;
  private genero: Genero | undefined;
  private editora: Editora | undefined;
  private ativo: boolean | undefined;

  constructor(
    codigo?: number,
    nome?: string,
    nomeAutor?: string,
    valor?: number,
    genero?: Genero,
    editora?: Editora,
    ativo?: boolean
  ){
    this.codigo = codigo;
    this.nome = nome;
    this.nomeAutor = nomeAutor;
    this.valor = valor;
    this.genero = genero;
    this.editora = editora;
    this.ativo = ativo;
  }

  getCodigo() : number | undefined{
    return this.codigo;
  }

  setCodigo(codigo : number){
    this.codigo = codigo;
  }

  getNome() : string | undefined{
    return this.nome;
  }

  setNome(nome : string){
    this.nome = nome;
  }

  getNomeAutor() : string | undefined{
    return this.nomeAutor;
  }

  setNomeAutor(nomeAutor : string){
    this.nomeAutor = nomeAutor;
  }

  getValor() : number | undefined{
    return this.valor;
  }

  setValor(valor : number){
    this.valor = valor;
  }

  getEditora() : Editora | undefined{
    return this.editora;
  }

  setEditora(editora : Editora){
    this.editora = editora;
  }

  getGenero() : Genero | undefined{
    return this.genero;
  }

  setGenero(genero : Genero){
    this.genero = genero;
  }

  getAtivo() : boolean | undefined{
    return this.ativo;
  }

  setAtivo(ativo : boolean){
    this.ativo = ativo;
  }

}
