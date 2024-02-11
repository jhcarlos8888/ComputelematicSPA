import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './pie-de-pagina.component.html'
})
export class PieDePaginaComponent {

}
