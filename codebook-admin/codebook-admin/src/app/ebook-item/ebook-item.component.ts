import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from '../type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ebook-item',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './ebook-item.component.html',
  styleUrls: ['./ebook-item.component.css']
})
export class EbookItemComponent {

  @Input() product!: products; // Reçoit le produit complet
  @Input() productId!: string; // Reçoit l'ID du produit
  @Output() close = new EventEmitter<void>();

  editProduct: products = { ...this.product };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    console.log('Produit:', this.product);
    console.log('ID du produit:', this.productId);
    this.editProduct = { ...this.product };
  }

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
   
  }
}
