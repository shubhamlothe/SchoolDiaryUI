import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, User } from '../http-client-service.service';

@Component({
  selector: 'app-approve-user',
  templateUrl: './approve-user.component.html',
  styleUrls: ['./approve-user.component.css']
})
export class ApproveUserComponent implements OnInit {
  users: User[];
  user: User;
  st: number;
  // usr: User[];
  constructor(private abc: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {
    this.GetPending();
  }
  GetPending() {
    this.abc.GetPending().subscribe(data => {
      this.users = data;
    });
  }
  onApproved(user: User) {
    if (user.isApproved === 0) {
      user.isApproved = 1;
    }
  }

  Approve() {
    this.abc.approval(this.users).subscribe(res => {
      this.router.navigate(['userHome']);
    })
  }
}

