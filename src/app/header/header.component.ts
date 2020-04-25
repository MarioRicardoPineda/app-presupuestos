import { Component, OnInit } from '@angular/core';
import { IngresosService } from './../services/ingresos.service';
import { GastosService } from './../services/gastos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public presupuestoTotal: number
  public ingresosTotales: number 
  public gastosTotales: number
  public porcentaje: number = 0

  constructor(
    private _ingresosService: IngresosService,
    private _gastos: GastosService
    ){

    this.ingresosTotales = this._ingresosService.sumaIngresos()
    this.gastosTotales = this._gastos.sumaGastos() 

    this.presupuestoTotal = this.ingresosTotales - this.gastosTotales

    this.porcentaje = this.gastosTotales / this.ingresosTotales

    
  }
  
  ngOnInit(){
    
    this._ingresosService.ingresos.subscribe(
      (sumaTotal: number) => {
        this.ingresosTotales = sumaTotal
        this.presupuestoTotal = sumaTotal - this.gastosTotales
        this.porcentaje = this.gastosTotales / this.ingresosTotales
      },
      err => {
        console.error('Hubo un error en: ', err)
      }
    )

    this._gastos.gastos.subscribe(
      (sumaTotal: number) => {
        this.gastosTotales = sumaTotal
        this.presupuestoTotal = this.ingresosTotales - sumaTotal
        this.porcentaje = this.gastosTotales / this.ingresosTotales
      },
      err => console.log('Hubo un error ', err)
    )

  }

}
