import { Routes } from '@angular/router';
import { RespuestaSuscripcionOfertaComponent } from './pages/respuesta-suscripcion-oferta/respuesta-suscripcion-oferta.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'responseSuscripcionOferta', component: RespuestaSuscripcionOfertaComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
