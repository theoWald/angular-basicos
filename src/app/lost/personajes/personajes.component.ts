import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface'
import { LostService } from '../services/lost.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  @Input()  personajes: Personaje[] = [];

  constructor( private lostService: LostService) {}

}
