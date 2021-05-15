import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { CerveceriaComponent } from './components/cerveceria/cerveceria.component';
import { TastingRoomComponent } from './components/tasting-room/tasting-room.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ModuloPromocionComponent } from './Subcomponents/modulo-promocion/modulo-promocion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LandingPageComponent,
    PromocionesComponent,
    CerveceriaComponent,
    TastingRoomComponent,
    CervezasComponent,
    ModuloPromocionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
