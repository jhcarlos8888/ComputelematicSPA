import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ObjetivosGeneralesComponent } from './components/objetivos-generales/objetivos-generales.component';
import { BoletinOfertasComponent } from './components/boletin-ofertas/boletin-ofertas.component';
import { ProductosServiciosComponent } from './components/productos-servicios/productos-servicios.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    ObjetivosGeneralesComponent,
    BoletinOfertasComponent,
    ProductosServiciosComponent,
    PieDePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ComputelematicSPA';
}
