import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // Get all products
  getProductsService(){
    return this.http.get("http://localhost:3000/products");
  }

  //Get products with paging
  getProductsPagService(number:number){
    return this.http.get("http://localhost:3000/products?_page="+number+"&_limit=3");
  }

  // Delete a product by is id
  deleteProductService(id:any){
    return this.http.delete("http://localhost:3000/products/"+id);
  }

  // Add a product
  addProductService(product: any){
    return this.http.post("http://localhost:3000/products", product);
  }

  // Change attribut 'available' in the product
  changeAvailabilityService(product: any){
    let isAvailable = product.available;
    return this.http.patch("http://localhost:3000/products/"+product.id, {available: !isAvailable});

  }

  // Filter products with min and max prices
  searchByRangeService(search:any){
    let min = search.min;
    let max = search.max;
    return this.http.get("http://localhost:3000/products?price_gte=" + min + "&price_lte=" + max);
  }

  // Filter product by keyword
  searchByKeywordService(search:any){
    let keyword = search.keyword;
    return this.http.get("http://localhost:3000/products?q="+ keyword);
  }

  updateProductService(product: any){
    console.log("In service");
    return this.http.put("http://localhost:3000/products/" + product.id, product);
    //return this.http.patch("http://localhost:3000/products/" + product.id, product);
  }

}
