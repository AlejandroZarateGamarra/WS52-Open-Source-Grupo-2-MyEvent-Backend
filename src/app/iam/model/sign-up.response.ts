export class SignUpResponse {

  public id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.nombre = nombre;
    this.id = id;
  }
}
