import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, notice, User } from '../http-client-service.service';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css'],
  providers: [DatePipe]
})
export class NoticeUpdateComponent implements OnInit {

  isF = false;
  isA = false;
  noticeUpdate: notice = new notice();
  role_id: any;
  user: User = new User();
  constructor(private router: Router, private datePipe: DatePipe, private HttpClientService: HttpClientServiceService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this.router.navigate(['homepage']);
    } else {
      this.HttpClientService.getUser(sessionStorage.getItem('id')).subscribe(res => {
        this.user = res;
      })
    }


    this.getdetails();
  }


  back() {
    this.router.navigate(['userHome']);
  }
  onClassSelected(cls: number) {

    this.noticeUpdate.student_class = cls;
  }

  Add() {
    // this.noticeUpdate.notice_id = 1;
    this.noticeUpdate.date_to = this.datePipe.transform(this.noticeUpdate.date_to, 'ddMMyyyy');
    this.noticeUpdate.date_from = this.datePipe.transform(this.noticeUpdate.date_from, 'ddMMyyyy');
    this.HttpClientService.addNotice(this.noticeUpdate).subscribe(res => {
      alert("added");
    })
  }


  getdetails() {
    this.HttpClientService.getUser(sessionStorage.getItem('id')).subscribe(res => {
      this.role_id = res.role_id;

      if (this.role_id == 0) {
        this.isA = true;

      }
      else if (this.role_id == 1) {

        this.isF = true;
      }

    })
  }
  logout() {
    sessionStorage.removeItem('id');
    this.router.navigate(['homepage']);
  }



  home() {
    this.router.navigate(['userHome']);
  }

  vProfile() {
    this.router.navigate(['viewProfile']);
  }

  attendance() {
    this.router.navigate(['attendance']);
  }
  result() {
    this.router.navigate(['result']);
  }

  notices() {
    this.router.navigate(['notices']);
  }

}
