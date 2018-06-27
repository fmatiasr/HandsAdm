import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CasesService } from './cases.service';

describe('CasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CasesService
      ],
      imports:[
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([CasesService], (service: CasesService) => {
    expect(service).toBeTruthy();
  }));
});
