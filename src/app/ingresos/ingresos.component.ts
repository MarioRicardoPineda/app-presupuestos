import { Component, Input } from '@angular/core';
import { Ingreso } from './../models/ingresos.model';
import { IngresosService } from './../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  @Input() listaIngresos: Ingreso[]

  constructor(
    private _ingresosService: IngresosService
    ) { }

  onDelete(index: number){
    this._ingresosService.removeIngreso(index)
  }

}
