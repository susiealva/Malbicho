import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cerveza } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL="http://localhost:3000/api/pedidos";
  products: Cerveza[] = [];
  productPage_items: Cerveza[] = [];
  constructor(private http:HttpClient) { 
    this.productPage_items = [];
  }

  getProducts(){
    return this.http.get<Cerveza[]>(this.API_URL);
  }
  getProductoPage(){
    return this.productPage_items = JSON.parse(localStorage.getItem('ProductPage') || '{}');
  }
  getCarrito(){
    return this.productPage_items = JSON.parse(localStorage.getItem('ProductPage') || '{}');
  }

  addToProduct(item:Cerveza){
    item.cantidad_P = 1;

      if(localStorage.getItem('ProductPage') === null){
        this.productPage_items?.push(item);
        localStorage.setItem('ProductPage', JSON.stringify(this.productPage_items));
      }
      else if(this.isDuplicated(item.id)){
        this.productPage_items = JSON.parse(localStorage.getItem('ProductPage') || '{}')
        this.productPage_items[this.isDuplicatedId(item.id)].cantidad_P++;
        localStorage.setItem('ProductPage', JSON.stringify(this.productPage_items));
      }
      else{
        this.productPage_items?.push(item);
        localStorage.setItem('ProductPage', JSON.stringify(this.productPage_items));
      }



    console.log(this.productPage_items);
  }

  isDuplicated(id:any){
    for(var i=0;i<=this.productPage_items?.length -1; i++){
      if(id===this.productPage_items[i].id){
        return true;
      }
    }
    return false;
  }
  isDuplicatedId(id:any){
    for(var i=0;i<=this.productPage_items?.length -1; i++){
      if(id===this.productPage_items[i].id){
        return 1;
      }
    }
    return 0;
  }
}
