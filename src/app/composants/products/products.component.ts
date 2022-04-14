import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  displayDelete: boolean = false;
  pagination: number = 1;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    //this.getProducts();
    this.getProductsPag();
  }

  // Get all products
  getProducts() {
    this.productService.getProductsService().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  // Get all products with paging
  getProductsPag() {
    this.productService.getProductsPagService(this.pagination).subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  movePagination(number: any) {
    //If last page and click on 'next'
    if (this.products.length <= 0 && number > 0) {
      this.getProductsPag();
      //If first page and click on 'previous'
    } else if (this.pagination <= 1 && number < 0) {
      this.getProductsPag();
    } else {
      this.pagination = this.pagination + number;
    }
    this.getProductsPag();
  }

  // Delete a product by id ID
  deleted(id: any) {
    this.productService.deleteProductService(id).subscribe(() => {
      this.getProductsPag();//Get the new list of products
      this.displayDelete = true;
    }
    );
  }

  // Change the attibut "available" of a product
  changeAvailability(product: any) {
    this.productService.changeAvailabilityService(product).subscribe(() => {
      this.getProductsPag();
      console.log("change availability");
    })
  }

  // Filter products with min and max prices
  searchByRange(search: any) {
    this.productService.searchByRangeService(search.value).subscribe(data => {
      this.products = data;
    })
  }

  // Filter products with keyword
  searchByKeyword(search: any) {
    this.productService.searchByKeywordService(search.value).subscribe(data => {
      this.products = data;
    })
  }



}
