import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ObjetivosGeneralesComponent } from '../../components/objetivos-generales/objetivos-generales.component';
import { BoletinOfertasComponent } from '../../components/boletin-ofertas/boletin-ofertas.component';
import { ProductosServiciosComponent } from '../../components/productos-servicios/productos-servicios.component';
import { PieDePaginaComponent } from '../../components/pie-de-pagina/pie-de-pagina.component';
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
