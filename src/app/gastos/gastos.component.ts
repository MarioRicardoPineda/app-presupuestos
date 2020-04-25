import { Component, OnInit, Input } from '@angular/core';
import { GastosService } from '../services/gastos.service';
import { Gastos } from './../models/gastos.model';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

  @Input() gastos: Array<Gastos>

  constructor(
    private _gastos: GastosService
  ) { 

  }

  ngOnInit(): void {

    // this._gastos.porcent.subscribe(
    //   (porcent: number)=>{
    //     this.porcentaje = porcent
    //     console.log(this.porcentaje)
    //   },
    //   err => console.log('hubo un error ', err)
    // )

    

  }

  removeGastos(index: number){
    this._gastos.removeGastos(index)
  }

}
