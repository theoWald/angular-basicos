import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { LostService } from '../services/lost.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes(): Personaje[]{
    return this.lostService.personajes;
  }

  constructor( private lostService: LostService) {}

}
