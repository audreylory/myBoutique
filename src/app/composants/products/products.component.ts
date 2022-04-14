import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  display:boolean=false;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // Get all products
  getProducts(){
    this.productService.getProductsService().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }

  // Delete a product by id ID
  deleted(id:any){
    this.productService.deleteProductService(id).subscribe(()=>{
      this.getProducts();//Get the new list of products
      this.display = true;
    }
    );
  }

  // Change the attibut "available" of a product
  changeAvailablity(product: any) {
    this.productService.changeAvailablityService(product).subscribe(()=>{
      this.getProducts();
      console.log("change availability");
    })
  }

  // Filter products with min and max prices
  searchByRange(search: any) {
    this.productService.searchByRangeService(search.value).subscribe(data=>{
      this.products = data;
    })
  }

  // Filter products with keyword
  searchByKeyword(search: any) {
    this.productService.searchByKeywordService(search.value).subscribe(data=>{
      this.products = data;
    })
  }



}
