import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isShow = false;

  constructor(private productService:ProductService) { }
  products:any;
  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.products=this.productService.listProducts().subscribe(product=>{
      this.products=product;
      console.log(this.products);
    });
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
