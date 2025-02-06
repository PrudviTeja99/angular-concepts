import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  parentvalue?:string;
  childvalue?:string;

  sendText(value: string){
  
    this.parentvalue=value;
  }

  fromChild(value:any){
    this.childvalue=value;
    // console.log(value)
  }

}
