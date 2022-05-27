import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  products:any;

  ngOnInit(): void {
  }

  add(productname:string ,productdetails:string,productprice:string, producttimg:string, quantity:string, category:string){
    this.products={
      'productName':productname,
      'productDetails':productdetails,
      'productPrice':productprice,
      'productImg':producttimg,
      'stockQuantity':quantity,
      'category_id':category
    };
    
    this.productservice.addProducts(this.products as any).subscribe(product=>{
      this.products=product
    });
    console.log(this.products);
  }

}
