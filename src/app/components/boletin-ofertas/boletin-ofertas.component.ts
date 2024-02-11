import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-boletin-ofertas',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './boletin-ofertas.component.html'
})
export class BoletinOfertasComponent {

}
