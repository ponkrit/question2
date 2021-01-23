import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {of} from "rxjs";

let httpClientSpy: { get: jasmine.Spy };
describe('CategoryService', () => {
  let service: CategoryService;
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CategoryService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response as array', () => {
    const mockedCategoryList = [
      'category1',
      'category2',
      'category3'
    ];
    httpClientSpy.get.and.returnValue(of(mockedCategoryList));

    service.getCategoryList().subscribe(
      data => expect(data.length).toEqual(3)
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'call once');
  });
});
