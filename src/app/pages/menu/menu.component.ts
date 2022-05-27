import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dataservice: OrderDetailsService) { }
  cloData:any;
  ngOnInit(): void {
    this.cloData = this.dataservice.productData;
  }

}
