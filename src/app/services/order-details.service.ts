import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private httpClient: HttpClient) { }

  listProducts(){
    return this.httpClient.get('http://127.0.01/api/products');
  }

  getProduct(id: any){
    return this.httpClient.get('http://127.0.01/api/product/'+id);
  }

  addProduct(meal: Product){
    return this.httpClient.post('http://127.0.01/api/addProduct', Product);
  }

  updateProduct(id: any, product: Product){
    return this.httpClient.put('http://127.0.01/api/updateProduct/'+id, product);
  }

  deleteProduct(id: any){
    return this.httpClient.get('http://127.0.01/api/deleteProduct/'+id);
  }

  productData = [
    {
      id:1,
      productName: "PREPPY STYLE HIGH WAIST POLO DRESS BY88111",
      productDetails: "Material:Coarse hemp Color:apricot,blue,green,red,pink,yellow,brick red,blackSize:one size(1cm=0.3937inchi)",
      productPrice: 20,
      productImg: "../../../assets/img/robe.webp"
    },
    {
      id:2,
      productName: "SWEET DAISY MESH DRESS BY60805",
      productDetails: "Material:polyester Color:blue,white,pink,purple,black Size:one size(1cm=0.3937inchi) bust 80-88cm,sleeve 25cm,length 81cm",
      productPrice: 30,
      productImg: "../../../assets/img/rob3.webp"
    },
    {
      id:3,
      productName: "4 COLORS FlOWERS! SWEATER BY21077",
      productDetails: "Material:Acrylic fibres Color:black,green,light blue,dark blue Size:one size(1cm=0.3937inchi) length 48cm,shoulder 65cm,bust 124cm,sleeve 38cm,waist 118cm.",
      productPrice: 25,
      productImg: "../../../assets/img/tricot.webp"
    },
    {
      id:4,
      productName: "KOREAN LOOSE WEATHER EMBROIDERY SHIRT BY22104",
      productDetails: "Material:blending Color:white,black,yellow,caramel Size:M,L,XL M:bust 92cm,shoulder 46cm,sleeve 51cm,length 62-64cm L:bust 96cm,shoulder 47cm",
      productPrice: 30,
      productImg: "../../../assets/img/chemis.webp"
    },

    {
      id:5,
      productName: "JAPANESE CUTE MINI MULTI-PURPOSE BACKPACK BY70105",
      productDetails: "Material:canvas Color:black,white,pink,blue Size:one size(1cm=0.3937inchi) Length 23cm,width 8cm,height 27cm,weight 0.4kg",
     
      productPrice: 10,
      productImg: "../../../assets/img/cartables.webp"
    },

    {
      id:6,
      productName: "BLUE/PINK/BLACK CUTE JK SOFT GIRL BESTIE SANRIO DRESS BY60040",
      productDetails: "Material:cotton Color:blue,pink,black Size:one size(1cm=0.3937inchi) bust 45cm,waist 45cm,length 80cm",
      productPrice: 20,
      productImg: "../../../assets/img/bluerobe.webp"
    },

    {
      id:7,
      productName: "CUTE CARTOON KUROMI PLUSH BACKPACK BY70118",
      productDetails: "Material:canvas Color:black,white,pink,blue Size:one size(1cm=0.3937inchi) Length 23cm,width 8cm,height 27cm,weight 0.4kg",
      productPrice: 19,
      productImg: "../../../assets/img/nonos.webp"
    },

    {
      id:8,
      productName: "HARAJUKU CARTOON SHORT SLEEVE SHIRT BY22252",
      productDetails: "Material:Polyester fiber Color:such as pic Size:M,L(1cm=0.3937inchi) M：length 70cm,bust 102cm,shoulder 47cm，sleeve 25cmL:   length 72cm,bust 104cm,shoulder 48cm，sleeve 26cm",
      productPrice: 28,
      productImg: "../../../assets/img/ch.webp"
    },
  ];
}
