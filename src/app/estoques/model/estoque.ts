import { Livro } from './../../livros/model/livro';
import { Filial } from "src/app/filiais/model/filial";

export class Estoque{

  private codigo: number | undefined;
  private filial: Filial | undefined;
  private livro: Livro | undefined;
  private quantidade: number | undefined;
  private ativo: boolean | undefined;

  constructor(
    codigo?: number,
    filial?: Filial,
    livro?: Livro,
    quantidade?: number,
    ativo?: boolean
  ){
    this.codigo = codigo;
    this.filial = filial;
    this.livro = livro;
    this.quantidade = quantidade;
    this.ativo = ativo;
  }

  getCodigo() : number | undefined{
    return this.codigo;
  }

  setCodigo(codigo : number){
    this.codigo = codigo;
  }

  getFilial() : Filial | undefined{
    return this.filial;
  }

  setFilial(filial : Filial){
    this.filial = filial;
  }

  getLivro() : Livro | undefined{
    return this.livro;
  }

  setLivro(livro : Livro){
    this.livro = livro;
  }

  getQuantidade() : number | undefined{
    return this.quantidade;
  }

  setQuantidade(quantidade : number){
    this.quantidade = quantidade;
  }

  getAtivo() : boolean | undefined{
    return this.ativo;
  }

  setAtivo(ativo : boolean){
    this.ativo = ativo;
  }

}
