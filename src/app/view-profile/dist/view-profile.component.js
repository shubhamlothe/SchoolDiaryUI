"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewProfileComponent = void 0;
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var ViewProfileComponent = /** @class */ (function () {
    function ViewProfileComponent(HttpClientService, router) {
        this.HttpClientService = HttpClientService;
        this.router = router;
        this.user = new http_client_service_service_1.User();
        this.isStudent = false;
        this.isFaculty = false;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['homepage']);
        }
        var id = sessionStorage.getItem('id');
        this.HttpClientService.getUser(id).subscribe(function (res) {
            _this.user = res;
            _this.user.dob = _this.user.dob.slice(0, 2) + "-" + _this.user.dob.slice(2, 4) + "-" + _this.user.dob.slice(4, 8);
        });
        this.getCountries();
    };
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
    ViewProfileComponent.prototype.back = function () {
        this.router.navigate(['userHome']);
    };
    ViewProfileComponent.prototype.logout = function () {
        sessionStorage.removeItem('id');
        this.router.navigate(['homepage']);
    };
    ViewProfileComponent.prototype.getCountries = function () {
        var _this = this;
        this.HttpClientService.getCountries().subscribe(function (res) {
            _this.countries = res;
            console.log(res);
        });
    };
    ViewProfileComponent.prototype.getState = function () {
        var _this = this;
        this.HttpClientService.getState(this.user.country).subscribe(function (res) {
            _this.state = res;
            console.log(res);
        });
    };
    ViewProfileComponent.prototype.getCity = function () {
        var _this = this;
        this.HttpClientService.getCity(this.user.country, this.user.state).subscribe(function (res) {
            _this.city = res;
            console.log(res);
        });
    };
    ViewProfileComponent.prototype.save = function () {
        this.HttpClientService.updateUserProfile(this.user).subscribe(function (res) {
            alert("done");
        });
    };
    ViewProfileComponent.prototype.attendance = function () {
        this.router.navigate(['attendance']);
    };
    ViewProfileComponent.prototype.raiseRequest = function () {
        this.router.navigate(['raiseRequest']);
    };
    ViewProfileComponent.prototype.home = function () {
        this.router.navigate(['userHome']);
    };
    ViewProfileComponent.prototype.vProfile = function () {
        this.router.navigate(['viewProfile']);
    };
    ViewProfileComponent.prototype.result = function () {
        this.router.navigate(['result']);
    };
    ViewProfileComponent.prototype.notices = function () {
        this.router.navigate(['noticeUpdate']);
    };
    ViewProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-view-profile',
            templateUrl: './view-profile.component.html',
            styleUrls: ['./view-profile.component.css']
        })
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());
exports.ViewProfileComponent = ViewProfileComponent;
