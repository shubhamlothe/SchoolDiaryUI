import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, User, UserQuery } from '../http-client-service.service';

@Component({
  selector: 'app-raise-request',
  templateUrl: './raise-request.component.html',
  styleUrls: ['./raise-request.component.css']
})
export class RaiseRequestComponent implements OnInit {

  user: User = new User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  query: UserQuery = new UserQuery(null, null, null, null, null, null, null);
  constructor(private Http: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this.router.navigate(['homepage']);
    }



    const id = sessionStorage.getItem('id');

    this.Http.getUser(id).subscribe(res => {
      this.user = res;
      this.query.name = this.user.fName + ' ' + this.user.lName;
      this.query.contactPersonEmail = this.user.email_id;
      this.query.roleid = this.user.role_id;
      // alert(this.user.userId);
      this.query.userid = this.user.userId;
      // alert(this.query.userid);

    })
  }

  insertQuery() {
    this.Http.insertQuery(this.query).subscribe(res => {
      alert('We will contact you soon');
      this.router.navigate(['/parentHome']);
    })
  }
  back() {
    this.router.navigate(['userHome']);
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
    this.router.navigate(['noticeUpdate']);
  }
}