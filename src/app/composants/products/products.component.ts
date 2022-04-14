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

  getProducts(){
    this.productService.getProductsService().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }

  deleted(id:any){
    // console.log(id);
    this.productService.deleteProductService(id).subscribe(()=>{
      this.getProducts();//Pour refresh direct la page après suppression
      this.display = true;
    }
    );
  }

  changeAvailablity(product: any) {
    this.productService.changeAvailablityService(product).subscribe(()=>{
      this.getProducts();
      console.log("change availability");
    })
  }



}
