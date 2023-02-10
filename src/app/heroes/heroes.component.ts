import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name : 'Windstorm'
  }
  selectedHero?: Hero
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
}
