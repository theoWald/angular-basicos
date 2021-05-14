import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface'
import { LostService } from '../services/lost.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'Sun',
      poder: 4300
    },
    {
      nombre: 'Lapidus',
      poder: 9000
    },
    {
      nombre: 'Ben',
      poder: 15000
    }
  ];

  agregarNuevoPersonaje( argumento: Personaje ){
    this.personajes.push(argumento);
  }

  //Estamos inyectando el servicio en este componente
  constructor( private lostService: LostService) {}

}
