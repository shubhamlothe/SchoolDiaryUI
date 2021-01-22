import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { attendance } from './http-client-service.service';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResultComponent } from './result/result.component';
import { ApproveUserComponent } from './approve-user/approve-user.component';
import { RaiseRequestComponent } from './raise-request/raise-request.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'viewProfile', component: ViewProfileComponent },
  { path: 'userHome', component: UserHomePageComponent },
  { path: 'noticeUpdate', component: NoticeUpdateComponent },
  { path: 'applyAttendance', component: AttendanceUpdateComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'result', component: ResultComponent },
  { path: 'approveUser', component: ApproveUserComponent },
  { path: 'raiseRequest', component: RaiseRequestComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
