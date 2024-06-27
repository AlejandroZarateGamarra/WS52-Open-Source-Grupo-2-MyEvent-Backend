export class SignInResponse {

  public id: number;
  public correo: string;
  public token: string;

  constructor(id: number, correo: string, token: string) {
    this.token = token;
    this.correo = correo;
    this.id = id;
  }

}
