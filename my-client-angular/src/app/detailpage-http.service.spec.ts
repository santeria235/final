import { TestBed, inject } from '@angular/core/testing';

import { DetailpageHttpService } from './detailpage-http.service';

describe('DetailpageHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailpageHttpService]
    });
  });

  it('should be created', inject([DetailpageHttpService], (service: DetailpageHttpService) => {
    expect(service).toBeTruthy();
  }));
});
