import { Component } from '@angular/core';
import { IngresosService } from './../services/ingresos.service';
import { Ingreso } from '../models/ingresos.model';
import { GastosService } from '../services/gastos.service';
import { Gastos } from './../models/gastos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  isSelect: string
  description: string
  costo: number

  constructor(
    private _ingresosService: IngresosService,
    private _gastos: GastosService
  ) { 
      this.isSelect = 'isGasto'
  }

  onSave(){
   let ingreso = new Ingreso(this.description, this.costo)
   let gasto = new Gastos(this.description, this.costo)
   
    if(this.isSelect == 'ingreso'){
      this._ingresosService.saveIngreso(ingreso)
    }else if(this.isSelect == 'isGasto'){
      this._gastos.saveGastos(gasto) 
    }

  }


}
