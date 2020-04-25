import { Injectable, EventEmitter } from "@angular/core";
import { Gastos } from './../models/gastos.model';
import { PercentPipe } from '@angular/common';
import { IngresosService } from './ingresos.service';

@Injectable({
  providedIn: "root"
})


export class GastosService {

  public listaGastos: Array<Gastos>
  public gastos = new EventEmitter<number>()
  // public porcent = new EventEmitter<number>()

  constructor(
    private _ingrsos: IngresosService
  ){

    this.listaGastos = [
      new Gastos('Renta depa.', 250, 0.16),
      new Gastos('Pago de Internet', 30, 0.019)
    ]

  }

  saveGastos(gasto: Gastos): void{
    let por = (gasto.costo / this._ingrsos.sumaIngresos())
    let gastoCompleto = new Gastos(gasto.description, gasto.costo, por)


    this.listaGastos.push(gastoCompleto)
    this.gastos.emit(this.sumaGastos())
  }

  removeGastos(index:number): void{
    this.listaGastos.splice(index, 1)
    this.gastos.emit(this.sumaGastos())
  }

  sumaGastos(): number{

    let result: number = 0

    this.listaGastos.forEach(gasto => {
      result += gasto.costo
    })
    return result

  }

  porcentajes(presupuesto: number, index:number): number{

    let percent = this.listaGastos[index].costo / presupuesto
    console.log(percent)
    return percent
  }

}