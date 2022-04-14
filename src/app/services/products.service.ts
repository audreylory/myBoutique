import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsService(){
    return this.http.get("http://localhost:3000/products");
  }

  deleteProductService(id:any){
    return this.http.delete("http://localhost:3000/products/"+id);
  }

  addProductService(product: any){
    return this.http.post("http://localhost:3000/products", product);
  }

  changeAvailablityService(product: any){
    // let id = product.id;
    // if(product.available){
    //   return this.http.patch("http://localhost:3000/products/"+id, {available: false});
    // }else{
    //   return this.http.patch("http://localhost:3000/products/"+id, {available: true});
    // }

    let available = product.available;
    return this.http.patch("http://localhost:3000/products/"+product.id, {available: !available});

  }
}
