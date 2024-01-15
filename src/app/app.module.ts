import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardCardComponent } from './Components/admin-dashboard-card/admin-dashboard-card.component';
import { AdminNewEmployeeComponent } from './Components/admin-new-employee/admin-new-employee.component';
import { AdminDepartmentComponent } from './Components/admin-department/admin-department.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { AdminAttendanceComponent } from './Components/admin-attendance/admin-attendance.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminEmployeeComponent } from './Components/admin-employee/admin-employee.component';
import { AdminFooterComponent } from './Components/admin-footer/admin-footer.component';
import { AttendanceDepartmentComponent } from './Components/attendance-department/attendance-department.component';
import { EmployeeAttendanceComponent } from './Components/employee-attendance/employee-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminDashboardCardComponent,
    AdminNewEmployeeComponent,
    AdminDepartmentComponent,
    AdminSettingsComponent,
    AdminAttendanceComponent,
    LoginComponent,
    AdminEmployeeComponent,
    AdminFooterComponent,
    AttendanceDepartmentComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
