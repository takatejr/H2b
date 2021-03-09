import { TestBed } from '@angular/core/testing';

import { PhotosTitleResolver } from './photos-title.resolver';

describe('PhotosTitleResolver', () => {
  let resolver: PhotosTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhotosTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
