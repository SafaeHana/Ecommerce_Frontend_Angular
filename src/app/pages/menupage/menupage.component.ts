import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private dataservice: OrderDetailsService) { }
  getMealId: any;
  menuData: any;
  ngOnInit(): void {
    this.getMealId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMealId, 'getmenu>>>');
    if(this.getMealId)
    {
        this.menuData =  this.dataservice.productData.filter((value)=>{
            return value.id == this.getMealId;
        });
        console.log(this.menuData, 'menudata>>>');
    }
  }

}
