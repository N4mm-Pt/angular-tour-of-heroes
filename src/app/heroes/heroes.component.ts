import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  hero: Hero = {
    id: 1,
    name : 'Windstorm'
  }
  selectedHero?: Hero
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void{
    this.getHeroes();
  }
}
