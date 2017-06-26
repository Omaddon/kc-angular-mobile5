export class Contacto {

  static nuevoDesdeJSON(json: any): Contacto {
    return new Contacto(
      json.id,
      json.nombre,
      json.apellidos,
      json.movil,
      json.email,
      json.facebook,
      json.twitter
    )
  }

  // map ~ forEach (no confundir con el 'map' de html)
  static nuevaColeccionDesdeJSON(json: any[]): Contacto[] {
    return json.map((contactoJSON: any): Contacto => {
      return Contacto.nuevoDesdeJSON(contactoJSON);
    });
  }

  constructor(
    public id: number,
    public nombre: string,
    public apellidos?: string,
    public movil?: string,
    public email?: string,
    public facebook?: string,
    public twitter?: string
  ) {}
}
