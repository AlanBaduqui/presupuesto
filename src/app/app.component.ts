import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Delacarar variables de tipo array
  //las cuales van a contener los ingresos y los egresos

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  //Crearemos un constructor,e inicializaremos la variables
  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) {
    //Inicializar variables
    this.ingresos = ingresoService.ingresos;
    this.egresos = egresoService.egresos;
  }

  //Definir el metodo que realizada la suma de los ingresos
  getIngresoTotal() {
    //Declarar una varible que almacene el ingreso getIngresoTotal
    let ingresoTotal: number = 0;

    //Utilizando un forEach, iteramos la variable de tipo Array
    this.ingresos.forEach(ingreso=>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    //Declarar una varible que almacene el ingreso getEgresoTotal
    let EgresoTotal: number = 0;

    //Utilizando un forEach, iteramos la variable de tipo Array
    this.egresos.forEach(egreso=>{
      EgresoTotal += egreso.valor;
    });
    return EgresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
