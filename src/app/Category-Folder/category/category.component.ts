import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router ,private vehiculeService:CategoryService) { }

  categories:any;
  ngOnInit(): void {
    this.showCategories();
  }

  showCategories(){
    this.categories = this.vehiculeService.listCategories().subscribe(category=>{
    this.categories=category;
    console.log(this.categories);
    });
   }
   
   deleteCategory(id:any){
    this.vehiculeService.deleteCategory(id).subscribe(
      res =>{
        this.categories = this.categories.filter((a:any) =>a.id == id);
      }
    );
    this.router.navigateByUrl('/');
  
  }

}
