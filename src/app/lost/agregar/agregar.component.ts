import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { LostService } from '../services/lost.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor( public lostService: LostService) {}

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    
    console.log(this.nuevo);

    this.lostService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = {nombre: '', poder: 0};    

  }
  

}
