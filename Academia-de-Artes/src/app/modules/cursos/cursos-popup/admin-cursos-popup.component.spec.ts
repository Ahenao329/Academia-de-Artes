import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCursosPopupComponent } from './admin-cursos-popup.component';

describe('AdminCursosPopupComponent', () => {
  let component: AdminCursosPopupComponent;
  let fixture: ComponentFixture<AdminCursosPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCursosPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCursosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
