import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  //Creamos el Arreglo

  ingresos: Ingreso[] = [
    new Ingreso('Salario', 15000),
    new Ingreso('Venta Automovil', 120000),
  ];

  //Crear metodo
  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    //Eliminamos el Registro
    this.ingresos.splice(indice, 1);
  }
}
