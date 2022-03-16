import { Cidade } from './../../servicos-globais/model/cidade';
export class Editora{

  private codigo: number | undefined;
  private nome: string | undefined;
  private telefone: string | undefined;
  private email: string | undefined;
  private endereco: string | undefined;
  private cidade: Cidade | undefined;
  private ativa: boolean | undefined;

  constructor(
    codigo?: number,
    nome?: string,
    telefone?: string,
    email?: string,
    endereco?: string,
    cidade?: Cidade,
    ativa?: boolean
  ){
    this.codigo = codigo;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
    this.cidade = cidade;
    this.ativa = ativa;
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

  getTelefone() : string | undefined{
    return this.telefone;
  }

  setTelefone(telefone : string){
    this.telefone = telefone;
  }

  getEmail() : string | undefined{
    return this.email;
  }

  setEmail(email : string){
    this.email = email;
  }

  getEndereco() : string | undefined{
    return this.endereco;
  }

  setEndereco(endereco : string){
    this.endereco = endereco;
  }

  getCidade() : Cidade | undefined{
    return this.cidade;
  }

  setCidade(cidade : Cidade){
    this.cidade = cidade;
  }

  getAtiva() : boolean | undefined{
    return this.ativa;
  }

  setAtiva(ativa : boolean){
    this.ativa = ativa;
  }

}
