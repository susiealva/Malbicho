import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { CerveceriaComponent } from './components/cerveceria/cerveceria.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ModuloPromocionComponent } from './subComponents/modulo-promocion/modulo-promocion.component';
import { ModuloProductoComponent } from './subComponents/modulo-producto/modulo-producto.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PagoComponent } from './components/pago/pago.component';
import { ProductComponent } from './components/product/product.component';
import { ModuloCarritoComponent } from './subComponents/modulo-carrito/modulo-carrito.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { ModuloMercanciaComponent } from './subComponents/modulo-mercancia/modulo-mercancia.component';
import { ProductwrapperComponent } from './components/productwrapper/productwrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LandingPageComponent,
    PromocionesComponent,
    CerveceriaComponent,
    CervezasComponent,
    ModuloPromocionComponent,
    ModuloProductoComponent,
    ContactComponent,
    CarritoComponent,
    PagoComponent,
    ProductComponent,
    ModuloCarritoComponent,
    SuccessPageComponent,
    ModuloMercanciaComponent,
    ProductwrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
