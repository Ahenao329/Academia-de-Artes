import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaignarCursosPopupComponent } from './aaignar-cursos-popup.component';

describe('AaignarCursosPopupComponent', () => {
  let component: AaignarCursosPopupComponent;
  let fixture: ComponentFixture<AaignarCursosPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaignarCursosPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaignarCursosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
