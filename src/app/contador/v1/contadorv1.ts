import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../../app.component.html',
  styleUrls: ['../../app.component.css']
})
export class AppComponentv1 {
  title: string = 'Contador App';
  numero: number = 10;
  numero2: number = 27;
  numero3: number = 5;
  base: number = 5;

  //Primera aproximación
  //=============================
  sumar(){
    this.numero2 += 1;
  }

  restar(){
    this.numero2 -= 1;
  }

  //Segunda aproximación
  //=============================
  acumular(valor: number){
    this.numero2 += valor;
  }

  //Tarea
  //=============================
  acumularBase(valor: number){
    this.numero3 += valor;
  }

}