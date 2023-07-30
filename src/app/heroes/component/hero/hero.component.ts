import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name:string = 'Peter';
  public edad:number = 34

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return ` ${this.name} - ${this.edad}`
  }

  changeEdad() :void{
    this.edad = 45
  }

  changeName() :void{
    this.name = 'Iron Man'
  }
}
