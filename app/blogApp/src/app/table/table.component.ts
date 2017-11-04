import { Component, OnInit } from '@angular/core';
import {ICat} from './cat';
import {ProductService} from './table.service';

import {IProduct} from './product';

import { Router } from '@angular/router';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent{
  errorMessage: any;
  photos: any;
  

  /*
  //declaraciones no utlizadas
  newCat: ICat[] = [{name:'',race:'',description:'',img:''}];
  currentCat: any;
  cats: ICat[] =  [  
    {name: 'Copo', race: 'black', description: 'este es copo', img:'https://ep01.epimg.net/tecnologia/imagenes/2015/06/25/actualidad/1435248518_445335_1435251285_noticia_normal.jpg'},
    {name: 'pelusa', race: 'grey', description: 'este es pelusa', img:'https://notasdemascotas.com/wp-content/uploads/2015/02/que-hacer-cuando-traes-un-gatito-a-casa-324x235.jpg'},
    {name: 'maya',  race: 'yellow', description: 'este es maya', img:'https://ep01.epimg.net/tecnologia/imagenes/2015/06/25/actualidad/1435248518_445335_1435251285_noticia_normal.jpg'},
    {name: 'toby',  race: 'brown', description: 'este es toby', img:'https://notasdemascotas.com/wp-content/uploads/2015/02/que-hacer-cuando-traes-un-gatito-a-casa-324x235.jpg'}
  ]
  */
  
  newProduct: IProduct[] = [{_id:'',name:'',description:'',brand:'',price:'',units:'',picture:''}];
  newUpdate: IProduct[] = [{_id:'',name:'',description:'',brand:'',price:'',units:'',picture:''}];
  products: IProduct[] = [
    {_id:'',name:'',description:'',brand:'', price: '', units:'',picture:''}
  ]

  constructor(private _productService: ProductService){
    
  }

  ngOnInit(): void{
    this._productService.getProducts().subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error);
  }

  actTab(): void{
    this._productService.getProducts().subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error
    );
  }
  
  addProduct(): void{
    //let body = JSON.stringify(this.newProduct[0]);
    console.log("Product added: " + this.newProduct);
    this._productService.postProduct(this.newProduct[0]).subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error
    );
  }

  removeProduct(id): void{
    console.log("ID product:" + id);
    this._productService.deleteProduct(id).subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error
    );
  }

  updateProduct(): void{
    console.log(this.newUpdate);
    this._productService.putProduct(this.newUpdate[0]).subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error
    );
  }


/*
  //funciones no utilizadas
  removeCat(cat): void{
    this.cats = this.cats.filter((x)=>{
      return x.name != cat.name
    });
  }

  addCat(): void{
    this.cats.push(this.newCat[0]);
    this.newCat = [{name:'',race:'',description:'', img:''}];
  }

  setCurrentCat(cat):void{
    this.currentCat = cat;
  } 
*/

}