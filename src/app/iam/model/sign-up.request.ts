export class SignUpRequest {

  public name: string;
  public surname: string;
  public correo: string;
  public password: string;
  public phone: string;
  public dni: string;
  public tipoDeCuenta: string;
  public premium: string;

  constructor(name: string, surname: string, correo: string, phone: string, dni: string, tipoDeCuenta: string, password: string, premium: string) {
    this.name = name;
    this.surname = surname;
    this.correo = correo;
    this.password = password;
    this.phone = phone;
    this.dni = dni;
    this.tipoDeCuenta = tipoDeCuenta;
    this.premium = premium;

  }

}

