import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Injectable()
export class LostService {

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

    constructor() {
        console.log('Servicio inicializado');
    }

    agregarNuevoPersonaje( argumento: Personaje ){
        this.personajes.push(argumento);
      }

}