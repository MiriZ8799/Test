import { state, trigger,style,transition, animate} from '@angular/animations';
import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
// import { colorChanger } from '../fish.animations';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss'],
  
})
export class AquariumComponent implements OnInit {
@Input()colorFish:string='red';

  constructor() { }

  ngOnInit(): void {}
   
  
  
}
