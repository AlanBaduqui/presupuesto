import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('Renta de un departamento', 10000),
    new Egreso('Ropa', 10000)
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    //Eliminamos el Registro
    this.egresos.splice(indice, 1);
  }
}
