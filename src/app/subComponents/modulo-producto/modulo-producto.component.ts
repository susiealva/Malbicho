import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service'


@Component({
  selector: 'app-modulo-producto',
  templateUrl: './modulo-producto.component.html',
  styleUrls: ['./modulo-producto.component.css']
})
export class ModuloProductoComponent implements OnInit {

  @Input() data:any;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    
  }
  addToProduct(){
    this.productService.addToProduct(this.data);
  }

}
