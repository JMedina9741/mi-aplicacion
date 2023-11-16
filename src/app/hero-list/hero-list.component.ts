import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list', // selector del componente
  templateUrl: './hero-list.component.html', // plantilla HTML del componente
  styleUrls: ['./hero-list.component.css'] // Estilos del componente
})
export class HeroListComponent {
// Propiedades del componente
  heroes: string[] = ['Hero 1', 'Hero 2', 'Hero 3'];

// Metodo del componente
  logHero(hero: string){
  console.log(`Selected Hero: ${hero}`);
  }
}
