import { TestBed } from '@angular/core/testing';

import { ContactLayoutService } from './contact-layout.service';

describe('ContactLayoutService', () => {
  let service: ContactLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
