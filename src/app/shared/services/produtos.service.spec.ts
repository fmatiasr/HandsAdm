import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProdutosService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ProdutosService], (service: ProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
