
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, notice, User } from '../http-client-service.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css'],
  providers: [DatePipe]

})
export class UserHomePageComponent implements OnInit {
  role_id: number;
  isDisplay = false;
  isFaculty = false;
  isAdmin = false;
  isStudent = false;
  n: notice = new notice(null, null, null, null, null);
  cls: number;
  clsNotice: notice[];
  myDate = new Date()
  globalNotice: notice[];
  user: User = new User();
  constructor(private router: Router, private Http: HttpClientServiceService, private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this.router.navigate(['homepage']);
    } else {
      this.Http.getUser(sessionStorage.getItem('id')).subscribe(res => {
        this.user = res;
      })
    }
    this.getdetails()
    this.getGlobalNotice();
  }

  getclsNoticeForStudent() {
    this.Http.getStudentClas(sessionStorage.getItem('id')).subscribe(res => {
      this.n.student_class = res.student_class;
      let latest_date = this.datePipe.transform(this.myDate, 'ddMMyyyy');
      this.n.date_to = latest_date;
      this.getNotice();
    })
  }

  approveUser() {
    this.router.navigate(['approveUser']);
  }

  getclsNoticeForFaculty() {
    this.Http.getFacultyClass(sessionStorage.getItem('id')).subscribe(res => {
      this.n.student_class = res.teaching_class;
      let latest_date = this.datePipe.transform(this.myDate, 'ddMMyyyy');
      this.n.date_to = latest_date;
      this.getNotice();
    })
  }


  getNotice() {
    this.Http.getClassNotice(this.n).subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        res[i].date_from = res[i].date_from.slice(0, 2) + "-" + res[i].date_from.slice(2, 4) + "-" + res[i].date_from.slice(4, 8);
        res[i].date_to = res[i].date_to.slice(0, 2) + "-" + res[i].date_to.slice(2, 4) + "-" + res[i].date_to.slice(4, 8);
      }
      this.clsNotice = res;
    })
  }


  getGlobalNotice() {
    this.n.student_class = 0;
    let latest_date = this.datePipe.transform(this.myDate, 'ddMMyyyy');
    this.n.date_to = latest_date;
    this.Http.getGlobalNotice(this.n).subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        res[i].date_from = res[i].date_from.slice(0, 2) + "-" + res[i].date_from.slice(2, 4) + "-" + res[i].date_from.slice(4, 8);
        res[i].date_to = res[i].date_to.slice(0, 2) + "-" + res[i].date_to.slice(2, 4) + "-" + res[i].date_to.slice(4, 8);
      }
      this.globalNotice = res;
    })
  }


  viewProfile() {
    this.router.navigate(['viewProfile']);
  }

  noticeUpdate() {
    this.router.navigate(['noticeUpdate']);
  }
  addAttendance() {
    this.router.navigate(['applyAttendance']);
  }

  getAttendance() {
    this.router.navigate(['attendance']);
  }


  getdetails() {
    this.Http.getUser(sessionStorage.getItem('id')).subscribe(res => {
      this.role_id = res.role_id;
      if (this.role_id == 0) {
        this.isDisplay = true;
        this.isAdmin = true;
        this.isFaculty = false;
        this.isStudent = false;
        let latest_date = this.datePipe.transform(this.myDate, 'ddMMyyyy');
        this.Http.getAllNoticeForAdmin(latest_date).subscribe(res => {
          this.clsNotice = res;

        })
      }
      else if (this.role_id == 1) {

        this.isDisplay = true;
        this.isFaculty = true;
        this.isAdmin = false;
        this.isStudent = false;
        this.getclsNoticeForFaculty();
      }
      else if (this.role_id == 2 || this.role_id == 3) {
        this.isDisplay = false;
        this.isStudent = true;
        this.isAdmin = false;
        this.isFaculty = false;
        this.getclsNoticeForStudent();
      }
      else {
        this.isDisplay = false;
        this.isAdmin = false;
        this.isFaculty = false;
        this.isStudent = false;
      }

    })
  }


  logout() {
    sessionStorage.removeItem('id');
    this.router.navigate(['homepage']);
  }

  profile() {
    this.router.navigate(['viewProfile']);
  }

  disResult() {
    this.router.navigate(['result']);
  }

  addNotice() {
    this.router.navigate(['noticeUpdate']);
  }
  addResult() {
    this.router.navigate(['result']);
  }
  attendance() {
    this.router.navigate(['attendance']);
  }
  raiseRequest() {
    this.router.navigate(['raiseRequest']);
  }

  back() {
    this.router.navigate(['userHome']);
  }





  home() {
    this.router.navigate(['userHome']);
  }

  vProfile() {
    this.router.navigate(['viewProfile']);
  }


  result() {
    this.router.navigate(['result']);
  }

  notices() {
    this.router.navigate(['noticeUpdate']);
  }
}
