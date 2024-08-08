import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistraryconsultarComponent } from './registraryconsultar/registraryconsultar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistraryconsultarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registroconsultapeli';
}
