import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface'

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

}
