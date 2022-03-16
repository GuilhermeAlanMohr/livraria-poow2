export class Usuario{


  login: string | undefined;
  senha: string | undefined;
  token: string | undefined;
  permissao: string | undefined;

  constructor(login?: string, senha?: string, token?: string, permissao?: string) {

    this.login = login;
    this.senha = senha;
    this.token = token;
    this.permissao = permissao;

  }

}
