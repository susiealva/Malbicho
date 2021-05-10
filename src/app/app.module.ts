import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PromocionesComponent } from './Components/promociones/promociones.component';
import { CerveceriaComponent } from './Components/cerveceria/cerveceria.component';
import { TastingRoomComponent } from './Components/tasting-room/tasting-room.component';
import { CervezasComponent } from './Components/cervezas/cervezas.component';

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
    CervezasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
