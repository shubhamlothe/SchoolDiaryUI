import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, notice } from '../http-client-service.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  alNotice: notice[];

  constructor(private http: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('id')) {
      this.router.navigate(['homepage']);
    }
    this.http.getAllNotic().subscribe(res => {
      this.alNotice = res;
    })

  }

}
