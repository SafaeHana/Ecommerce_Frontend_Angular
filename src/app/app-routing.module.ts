import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryComponent } from './Category-Folder/category/category.component';
import { NewCategoryComponent } from './Category-Folder/new-category/new-category.component';

import { ProductsComponent } from './Product-Folder/products/products.component';
import { NewProductComponent } from './Product-Folder/new-product/new-product.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:id', component: MenupageComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'add', component: NewCategoryComponent},
  { path: 'product', component: ProductsComponent},
  { path: 'addProduct', component: NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
