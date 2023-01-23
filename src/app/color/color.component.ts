import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

@Output()
colorChange=new EventEmitter<string>()
  constructor() { }
  colorList:string[]=['red','green','blue']
  ngOnInit(): void {
  }
  colorChanges(color:string){
    this.colorChange.emit(color)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colorList, event.previousIndex, event.currentIndex);
  }
}
