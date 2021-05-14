import { Component, Input } from '@angular/core';
import { LostService } from '../services/lost.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor( public lostService: LostService) {}

}
