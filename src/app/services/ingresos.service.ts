import { Injectable, EventEmitter } from "@angular/core";
import { Ingreso } from './../models/ingresos.model';

@Injectable(
  {
    providedIn: "root"
  }
)

export class IngresosService {

  public listIngresos: Array<Ingreso>
  public ingresos = new EventEmitter<number>() 

  constructor(){  
    this.listIngresos = [
      new Ingreso('Salario', 1500),
      new Ingreso('Venta de zapatos', 25)
    ]

  }

  removeIngreso(index: number){
    this.listIngresos.splice(index, 1)
    this.ingresos.emit(this.sumaIngresos())
  }

  saveIngreso(ingreso: Ingreso){
    this.listIngresos.push(ingreso)
    this.ingresos.emit(this.sumaIngresos())
  }

  sumaIngresos(): number{
    let sumaTotal = 0

    this.listIngresos.forEach(ingresos => {
      sumaTotal += ingresos.costo
    })
    return sumaTotal
  }


}