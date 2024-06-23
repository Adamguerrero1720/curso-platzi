import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Hola Angular, como estas tu? {{city.toUpperCase()}}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firsttry-app';
  city= "Santo Domingo";
}
