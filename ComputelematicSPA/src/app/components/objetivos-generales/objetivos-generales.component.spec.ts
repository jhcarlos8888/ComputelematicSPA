import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosGeneralesComponent } from './objetivos-generales.component';

describe('ObjetivosGeneralesComponent', () => {
  let component: ObjetivosGeneralesComponent;
  let fixture: ComponentFixture<ObjetivosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivosGeneralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetivosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
