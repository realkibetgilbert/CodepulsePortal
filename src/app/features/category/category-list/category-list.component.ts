import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryToDisplay } from '../models/category-to-display.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{

categories!:CategoryToDisplay[]

  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void {
    this.loadCategories();
  }
  
  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.error("Error loading categories:", err);
      }
    });
  }
  onDelete(id: string) {
    this.categoryService.deleteCategoryById(id).subscribe({
      next: () => {
        this.loadCategories(); // Refresh category list
      },
      error: (err) => {
        console.error("Error deleting category:", err);
      }
    });
  }
}

