export class Estado{

  private sigla: string | undefined;
  private nome: string | undefined;

  constructor(
    sigla?: string,
    nome?: string
  ){
    this.sigla = sigla;
    this.nome = nome;
  }

  getSigla(): string | undefined{
    return this.sigla;
  }

  setSigla(sigla: string): void{
    this.sigla = sigla;
  }

  getNome(): string | undefined{
    return this.nome;
  }

  setNome(nome: string): void{
    this.nome = nome;
  }

}
