export class User {
  id:any;
  nombre:any;
  apellidos:any;
  correo_electronico:any;
  telefono:any;
  dni:any;
  tipo_de_cuenta:any;
  contrasena:any;
  premium:any;
  nivel:any;
  daycreate:any;


  constructor(id:any, nombre:any, apellidos:any, correo_electronico:any, telefono:any, dni:any, tipo_de_cuenta:any, contrasena:any, premium:any, nivel:any, daycreate:any){
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo_electronico = correo_electronico;
    this.telefono = telefono;
    this.dni = dni;
    this.tipo_de_cuenta = tipo_de_cuenta;
    this.contrasena = contrasena;
    this.premium = premium;
    this.nivel = nivel;
    this.daycreate = daycreate;
  }
}
