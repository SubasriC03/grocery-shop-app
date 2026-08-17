import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Apple', category: 'Fruits', price: 40, description: 'Fresh red apples, sold per kg.' },
    { id: 2, name: 'Milk', category: 'Dairy', price: 25, description: 'Full cream milk, 500ml pack.' },
    { id: 3, name: 'Bread', category: 'Bakery', price: 35, description: 'Whole wheat bread loaf.' },
    { id: 4, name: 'Tomato', category: 'Vegetables', price: 20, description: 'Fresh tomatoes, sold per kg.' },
    { id: 5, name: 'Rice', category: 'Grains', price: 60, description: 'Basmati rice, 1kg pack.' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}