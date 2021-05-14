import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Injectable()
export class LostService {

    private _personajes: Personaje[] = [
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

    //genera "variable" personajes, haciendo un nuevo "array"
    //partiendo sus elementos
    get personajes(): Personaje[] {
        return [... this._personajes]
    }

    constructor() {
        console.log('Servicio inicializado');
    }

    //_personajes porque es el propio, personajes es el getter
    agregarNuevoPersonaje( argumento: Personaje ){
        this._personajes.push(argumento);
      }

}