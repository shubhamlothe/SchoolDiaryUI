import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Countries, HttpClientServiceService, User } from '../http-client-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user: User = new User();

  isStudent = false;
  isFaculty = false;
  countries: Countries[];
  state: Countries[];
  city: Countries[];
  constructor(private HttpClientService: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this.router.navigate(['homepage']);
    }
    const id = sessionStorage.getItem('id');
    this.HttpClientService.getUser(id).subscribe(res => {
      this.user = res;

      this.user.dob = this.user && this.user.dob ? this.user.dob.slice(0, 2) + "-" + this.user.dob.slice(2, 4) + "-" + this.user.dob.slice(4, 8) : null;
      this.getCountries();
    })
  }

  //   if(this.user.role_id == 1)
  //   {
  //     this.isFaculty=true;
  //     this.isStudent=false;
  //   }
  //   else if(this.user.role_id==2)
  //   {
  //     this.isStudent=true;
  //     this.isFaculty=false;
  //   }
  //   else{
  //     this.isFaculty=false;
  //     this.isStudent=false;
  //   }
  // }

  back() {
    this.router.navigate(['userHome']);
  }


  logout() {
    sessionStorage.removeItem('id');
    this.router.navigate(['homepage']);
  }
  getCountries() {
    this.HttpClientService.getCountries().subscribe(res => {
      this.countries = <Countries[]><unknown>res;
      this.getState();
    });
  }

  getState() {
    this.HttpClientService.getState(this.user.country).subscribe(res => {
      this.state = <Countries[]><unknown>res;
      this.getCity();
    });
  }

  getCity() {
    this.HttpClientService.getCity(this.user.country, this.user.state).subscribe(res => {
      this.city = <Countries[]><unknown>res;
    });

  }

  save() {
    this.HttpClientService.updateUserProfile(this.user).subscribe(res => {
      alert("done");
    })

  }
  attendance() {
    this.router.navigate(['attendance']);
  }
  raiseRequest() {
    this.router.navigate(['raiseRequest']);
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
