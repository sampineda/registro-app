import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesNatalesComponent } from './ciudades-natales.component';

describe('CiudadesNatalesComponent', () => {
  let component: CiudadesNatalesComponent;
  let fixture: ComponentFixture<CiudadesNatalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesNatalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesNatalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
