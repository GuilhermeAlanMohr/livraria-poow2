import { Estado } from './estado';

export class Cidade{

  private codigo: number | undefined;
  private nome: string | undefined;
  private estado: Estado | undefined;

  constructor(
    codigo?: number,
    nome?: string,
    estado?: Estado
  ){

    this.codigo = codigo;
    this.nome = nome;
    this.estado = estado;

  }

  getCodigo(): number | undefined{
    return this.codigo;
  }

  setCodigo(codigo: number){
    this.codigo = codigo;
  }

  getNome(): string | undefined{
    return this.nome;
  }

  setNome(nome: string){
    this.nome = nome;
  }

  getEstado(): Estado | undefined{
    return this.estado;
  }

  setEstado(estado: Estado){
    this.estado = estado;
  }

}
