import { TestBed, inject } from '@angular/core/testing';

import { ConfigurationServiceService } from './configuration-service.service';

describe('ConfigurationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationServiceService]
    });
  });

  it('should be created', inject([ConfigurationServiceService], (service: ConfigurationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
