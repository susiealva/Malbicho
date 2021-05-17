import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerveceriaComponent } from './components/cerveceria/cerveceria.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'cerveceria', component: CerveceriaComponent},
{path: 'cervezas', component: CervezasComponent},
{path: 'promociones', component: PromocionesComponent},
{path: 'contact', component: ContactComponent},
{path: 'landing', component: LandingPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
