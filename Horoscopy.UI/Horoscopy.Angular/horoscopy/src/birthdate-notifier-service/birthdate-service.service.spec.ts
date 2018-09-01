import { TestBed, inject } from '@angular/core/testing';

import { BirthdateServiceService } from './birthdate-service.service';

describe('BirthdateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirthdateServiceService]
    });
  });

  it('should be created', inject([BirthdateServiceService], (service: BirthdateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
