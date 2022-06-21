import { TestBed } from '@angular/core/testing';

import { TwitterApService } from './twitter-ap.service';

describe('TwitterApService', () => {
  let service: TwitterApService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterApService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
