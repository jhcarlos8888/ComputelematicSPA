import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaSuscripcionOfertaComponent } from './respuesta-suscripcion-oferta.component';

describe('RespuestaSuscripcionOfertaComponent', () => {
  let component: RespuestaSuscripcionOfertaComponent;
  let fixture: ComponentFixture<RespuestaSuscripcionOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaSuscripcionOfertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespuestaSuscripcionOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
