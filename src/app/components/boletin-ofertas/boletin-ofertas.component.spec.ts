import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinOfertasComponent } from './boletin-ofertas.component';

describe('BoletinOfertasComponent', () => {
  let component: BoletinOfertasComponent;
  let fixture: ComponentFixture<BoletinOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletinOfertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletinOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
