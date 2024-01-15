import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDepartmentComponent } from './attendance-department.component';

describe('AttendanceDepartmentComponent', () => {
  let component: AttendanceDepartmentComponent;
  let fixture: ComponentFixture<AttendanceDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
