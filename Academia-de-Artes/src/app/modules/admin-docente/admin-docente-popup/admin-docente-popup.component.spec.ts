import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocentePopupComponent } from './admin-docente-popup.component';

describe('AdminDocentePopupComponent', () => {
  let component: AdminDocentePopupComponent;
  let fixture: ComponentFixture<AdminDocentePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDocentePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDocentePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
