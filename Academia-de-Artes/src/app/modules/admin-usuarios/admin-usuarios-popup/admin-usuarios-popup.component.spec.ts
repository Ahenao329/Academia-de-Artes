import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosPopupComponent } from './admin-usuarios-popup.component';

describe('AdminUsuariosPopupComponent', () => {
  let component: AdminUsuariosPopupComponent;
  let fixture: ComponentFixture<AdminUsuariosPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsuariosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
