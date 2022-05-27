import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private categoryservice:CategoryService) { }
  categories:any;
  ngOnInit(): void {
  }
  
add(categoryname:string,categorydetails:string ,  categorytimg:string ){
this.categories={
  'categoryName':categoryname,
  'categoryDetails':categorydetails,
  'categorytImg':categorytimg
};
this.categoryservice.addCategory(this.categories as any).subscribe(category=>{
  this.categories =category
});
console.log(this.categories);
}

}
