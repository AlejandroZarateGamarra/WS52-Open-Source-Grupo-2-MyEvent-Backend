export class BackendUser {
  id: any;
  name: any;
  surname: any;
  correo: any;
  password: any;
  phone: any;
  dni: any;
  tipoDeCuenta: any;
  premium: any;

  constructor(id: any, name: any, surname: any, correo: any, password: any, phone: any, dni: any, tipoDeCuenta: any, premium: any) {
    this.id = id;
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
