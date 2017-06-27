import { TestBed, inject } from '@angular/core/testing';

import { SellerResolveService } from './seller-resolve.service';

describe('SellerResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerResolveService]
    });
  });

  it('should be created', inject([SellerResolveService], (service: SellerResolveService) => {
    expect(service).toBeTruthy();
  }));
});
