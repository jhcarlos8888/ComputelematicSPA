import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ObjetivosGeneralesComponent } from '../objetivos-generales/objetivos-generales.component';
import { BoletinOfertasComponent } from '../boletin-ofertas/boletin-ofertas.component';
import { ProductosServiciosComponent } from '../productos-servicios/productos-servicios.component';
import { PieDePaginaComponent } from '../pie-de-pagina/pie-de-pagina.component';
import { RespuestaSuscripcionOfertaComponent } from '../respuesta-suscripcion-oferta/respuesta-suscripcion-oferta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent,
    ObjetivosGeneralesComponent,
    BoletinOfertasComponent,
    ProductosServiciosComponent,
    PieDePaginaComponent,
    RespuestaSuscripcionOfertaComponent,],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
