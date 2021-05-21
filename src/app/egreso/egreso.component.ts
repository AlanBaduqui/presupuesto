import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  //Declarar una variabler
  egresos: Egreso[] = [];

  //Utilizar una directiva @Input
  @Input() ingresoTotal: number;

  constructor(private egresoService: EgresoServicio) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  //Establecer el metodo para la eliminacion de los registros
  eliminarRegistro(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  //Definir el metodo que nos permite calcular el porcentaje correspondiente, respecto al egreso
  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
