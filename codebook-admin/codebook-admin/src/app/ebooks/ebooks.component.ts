import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { products } from '../type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-ebooks',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent {
  @Input() products: products[] =[];

  @Input() selected = false;

  @Output() select = new EventEmitter<products>();

  selectedProduct(products: products):void {
    this.select.emit(products);
    console.log('Produit sélectionné', products);
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  } 

  async loadProducts(): Promise<void> {
    try {
      const data = await this.productService.getProducts();
      this.products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    } catch (error) {
      console.error('Erreur durant le chargement des produits !', error);
    }
  }

}
