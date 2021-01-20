import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    ForgetPasswordComponent,
    FacultyComponent,
    ViewProfileComponent,
    UserHomePageComponent,
    NoticeUpdateComponent,
    AttendanceUpdateComponent,
    AttendanceComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
