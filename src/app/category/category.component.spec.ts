import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import {CategoryService} from "../services/category.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FilterPipe} from "../directives/filter.pipe";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        CategoryComponent,
        FilterPipe
      ],
      providers: [
        CategoryService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
