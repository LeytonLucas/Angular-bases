import { Component} from "@angular/core";


@Component({
  selector: 'app-counter',
  template:`
<h3>Version: {{version}}</h3>
<button (click)="decrementar(1)">-1</button>
<button (click)="Reset()">Reset</button>
<button (click)="incrementar(1)">+1</button>
  `
})

export class CounterComponent{
  public version:number = 10;
  public versionDefault: number = 10

  incrementar(value:number):void{
    this.version = this.version + value
  }

  decrementar(value:number):void{
    this.version = this.version - value
  }

  Reset():void{
    this.version = this.versionDefault
  }
}
