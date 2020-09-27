import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanosCrearComponent } from './ciudadanos-crear.component';

describe('CiudadanosCrearComponent', () => {
  let component: CiudadanosCrearComponent;
  let fixture: ComponentFixture<CiudadanosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadanosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadanosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
