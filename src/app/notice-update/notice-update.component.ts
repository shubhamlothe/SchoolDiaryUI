import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css']
})
export class NoticeUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  back() {
    this.router.navigate(['userHome']);
  }

}
