import { Component, OnInit ,ViewContainerRef,
  QueryList,
  ViewChildren, } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products !: Product[];
  term ='';


  constructor(private productService: ProductServiceService) { }


  ngOnInit(): void {
    this.productService.findAll().subscribe(data =>{
    this.products = data;
    });

  }

}
