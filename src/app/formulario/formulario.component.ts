import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //Declaramos una variable y asignamos un valor inicial
  tipo: string = 'ingresoOperacion';

  //Declarar variables que utilizaremos en el Input
  descripcionInput: string;
  valorInput: number;

  //Inyectar servicios
  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) {}

  ngOnInit(): void {}

  //definiremos un metodo que permite selecciona la operacion
  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  //Este metodo nos permite agregar elementos al arreglo
  agregarValor() {
    //Agregar el registro
    if(this.tipo=="ingresoOperacion")
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
      else
        this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
  }
}
