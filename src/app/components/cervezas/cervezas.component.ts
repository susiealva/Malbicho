import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'


@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})
export class CervezasComponent implements OnInit {

  constructor(public productService: ProductsService) { 

  }

  ngOnInit(): void {
    //console.log(this.productService.getProducts());
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products=res;
        console.log(this.productService.products);
      },
      err => {
        console.log(err);
      }
    )
  }

}
