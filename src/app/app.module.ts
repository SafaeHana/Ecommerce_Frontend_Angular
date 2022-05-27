import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryComponent } from './Category-Folder/category/category.component';
import { NewCategoryComponent } from './Category-Folder/new-category/new-category.component';
import { ProductsComponent } from './Product-Folder/products/products.component';
import { NewProductComponent } from './Product-Folder/new-product/new-product.component';
import { EditCategoryComponent } from './Category-Folder/edit-category/edit-category.component';
import { EditProductComponent } from './Product-Folder/edit-product/edit-product.component';
import { PayementComponent } from './pages/payement/payement.component';


const appRoutes: Routes = [
  { path:'',component:RegisterComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    MenupageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CategoryComponent,
    NewCategoryComponent,
    ProductsComponent,
    NewProductComponent,
    EditCategoryComponent,
    EditProductComponent,
    PayementComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
