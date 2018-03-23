import { TestBed, inject } from '@angular/core/testing';

import { MercucialService } from './mercucial.service';

describe('MercucialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercucialService]
    });
  });

  it('should be created', inject([MercucialService], (service: MercucialService) => {
    expect(service).toBeTruthy();
  }));
});
