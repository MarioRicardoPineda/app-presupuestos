import { Component, OnInit } from '@angular/core';
import { IngresosService } from './services/ingresos.service';
import { Ingreso } from './models/ingresos.model';
import { GastosService } from './services/gastos.service';
import { Gastos } from './models/gastos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public listaIngresos: Array<Ingreso>
  public listaGastos: Array<Gastos>

  constructor(
    private _ingresosService: IngresosService,
    private _gastos: GastosService
    ){

  }

  ngOnInit(): void {
    this.listaIngresos = this._ingresosService.listIngresos
    this.listaGastos = this._gastos.listaGastos
  }

}
