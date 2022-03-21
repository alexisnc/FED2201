import { TestBed } from '@angular/core/testing';

import { LightboxImagesService } from './lightbox-images.service';

describe('LightboxImagesService', () => {
  let service: LightboxImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightboxImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
