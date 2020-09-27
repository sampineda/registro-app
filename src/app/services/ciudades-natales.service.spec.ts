import { TestBed } from '@angular/core/testing';

import { CiudadesNatalesService } from './ciudades-natales.service';

describe('CiudadesNatalesService', () => {
  let service: CiudadesNatalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesNatalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
