import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-modulo-carrito',
  templateUrl: './modulo-carrito.component.html',
  styleUrls: ['./modulo-carrito.component.css']
})
export class ModuloCarritoComponent implements OnInit {

@Input() product: any;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

  addToProduct(){
    this.productService.addToProduct(this.product);
  }
}
