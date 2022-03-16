export class Genero{

  private codigo: number | undefined;
  private nome: string | undefined;

  constructor(codigo: number, nome: string){
    this.codigo = codigo;
    this.nome = nome;
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

}
