import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-productwrapper',
  templateUrl: './productwrapper.component.html',
  styleUrls: ['./productwrapper.component.css']
})
export class ProductwrapperComponent implements OnInit {



  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

}
