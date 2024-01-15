import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardCardComponent } from './Components/admin-dashboard-card/admin-dashboard-card.component';
import { AdminNewEmployeeComponent } from './Components/admin-new-employee/admin-new-employee.component';
import { AdminDepartmentComponent } from './Components/admin-department/admin-department.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminAttendanceComponent } from './Components/admin-attendance/admin-attendance.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { AdminEmployeeComponent } from './Components/admin-employee/admin-employee.component';
import { AuthGuard } from './Guards/auth-guard.guard';
import { AttendanceDepartmentComponent } from './Components/attendance-department/attendance-department.component';
import { EmployeeAttendanceComponent } from './Components/employee-attendance/employee-attendance.component';

const routes: Routes = [
  {path: '', component:AdminDashboardCardComponent, canActivate: [AuthGuard]},
  {path: 'Login', component:LoginComponent},
  // {path: 'Admin-Dashboard-Card', component:AdminDashboardCardComponent},
  {path: 'Admin-New-Employee', component:AdminNewEmployeeComponent, },
  {path: 'Admin-Department', component:AdminDepartmentComponent, canActivate: [AuthGuard]},
  {path: 'Admin-Attendance', component:AdminAttendanceComponent, canActivate: [AuthGuard]},
  {path: 'Admin-Settings', component:AdminSettingsComponent, canActivate: [AuthGuard]},
  {path: 'Admin-Employee', component: AdminEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'Attendance-Department', component: AttendanceDepartmentComponent, canActivate: [AuthGuard]},
  {path: 'Employee-Attendance', component: EmployeeAttendanceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
