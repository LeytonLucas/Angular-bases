import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public HeroList: string[] = ['Spiderman','Hulk','Doctor Strange','Capitan America']
  public deletedHero?: string = ''

  removeLastHero():void{
    this.deletedHero = this.HeroList.pop()
  }
}
