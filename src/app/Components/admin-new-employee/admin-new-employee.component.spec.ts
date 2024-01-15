import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewEmployeeComponent } from './admin-new-employee.component';

describe('AdminNewEmployeeComponent', () => {
  let component: AdminNewEmployeeComponent;
  let fixture: ComponentFixture<AdminNewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
