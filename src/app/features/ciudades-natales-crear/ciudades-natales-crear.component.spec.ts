import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesNatalesCrearComponent } from './ciudades-natales-crear.component';

describe('CiudadesNatalesCrearComponent', () => {
  let component: CiudadesNatalesCrearComponent;
  let fixture: ComponentFixture<CiudadesNatalesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesNatalesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesNatalesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
