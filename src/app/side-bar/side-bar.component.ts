import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../http-client-service.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe((res) => {
      this.user = res;
    });
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
  allNOtice() {
    this.router.navigate(['allNotice']);
  }


  canSeeResult() {
    const role_id = this.user ? this.user.role_id : null;
    return role_id === 2 || role_id === 3 || role_id === 1;
  }

  canAddNotices() {
    const role_id = this.user ? this.user.role_id : null;
    return role_id === 0 || role_id === 1;
  }

  getAllNotic() {

    const role_id = this.user ? this.user.role_id : null;
    return role_id === 2 || role_id === 3;


  }

}
