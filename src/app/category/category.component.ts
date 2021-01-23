import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryList = [];
  public keyword = '';
  constructor(public dataService: CategoryService) { }

  ngOnInit(): void {
    this.dataService.getCategoryList().subscribe((data) => {
      this.categoryList = data;
    })
  }
}
