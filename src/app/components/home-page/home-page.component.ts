import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { ModuloPromocionComponent } from '../subComponents/modulo-promocion.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

@NgModule({
  declarations: [
    ModuloPromocionComponent
  ]
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
