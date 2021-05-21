import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  //Declarar una variabler
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoServicio) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  //Establecer el metodo para la eliminacion de los registros
  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
