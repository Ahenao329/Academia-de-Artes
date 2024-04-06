import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosHorariosComponent } from './cursos-horarios.component';

describe('CursosHorariosComponent', () => {
  let component: CursosHorariosComponent;
  let fixture: ComponentFixture<CursosHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
