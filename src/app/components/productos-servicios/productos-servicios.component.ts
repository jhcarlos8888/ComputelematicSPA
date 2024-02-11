import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos-servicios',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './productos-servicios.component.html'
})
export class ProductosServiciosComponent {

}
