import { TestBed } from '@angular/core/testing';

import { AdminProductcategoryService } from './admin-productcategory.service';

describe('AdminProductcategoryService', () => {
  let service: AdminProductcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
