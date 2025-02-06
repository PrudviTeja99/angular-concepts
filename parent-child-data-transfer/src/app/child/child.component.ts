import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() childvalue?:string;

  @Output()
  childEventEmitter = new EventEmitter<String>();

  sendValue(value:string){
    this.childEventEmitter.emit(value);
  }
}
