import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent,FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'forms';
}
