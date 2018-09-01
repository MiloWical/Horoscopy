import { TestBed, inject } from '@angular/core/testing';

import { HoroscopyApiService } from './horoscopy-api.service';

describe('HoroscopyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoroscopyApiService]
    });
  });

  it('should be created', inject([HoroscopyApiService], (service: HoroscopyApiService) => {
    expect(service).toBeTruthy();
  }));
});
