import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, notice } from '../http-client-service.service';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css'],
  providers: [DatePipe]
})
export class NoticeUpdateComponent implements OnInit {

  noticeUpdate: notice = new notice();

  constructor(private router: Router, private datePipe: DatePipe, private HttpClientService: HttpClientServiceService) { }

  ngOnInit(): void {
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
}
