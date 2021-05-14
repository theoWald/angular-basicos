import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    
    console.log(this.nuevo);

    // Cuando pasabamos personajes con @Input
    //this.personajes.push(this.nuevo);
    //console.log(this.personajes);

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {nombre: '', poder: 0};    

  }
  

}
