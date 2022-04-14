import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  // Method for register a product
  addProduct(product: any){
    let data = product.value;
    this.productService.addProductService(data).subscribe(()=>{
      console.log("Product has been registered");
    });
  }
}
