import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ title }}</h1>

        <h4>La base es: <strong> {{base}} </strong></h4>
        <h3>Acumular con base  </h3>
        <button (click)="acumularBase(base)"> +{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumularBase(base * -1)"> -{{base}} </button>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumularBase(valor: number){
        this.numero += valor;
      }

}