import { TestBed, inject } from '@angular/core/testing';

import { EstabuloService } from './estabulo.service';

describe('EstabuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstabuloService]
    });
  });

  it('should be created', inject([EstabuloService], (service: EstabuloService) => {
    expect(service).toBeTruthy();
  }));
});
