import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    //Getter
    //Es como si fuera una variable mas
    get nombreMayus (): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'John Lock';
    }

    cambiarEdad(): void {
        this.edad = 53;
    }

}