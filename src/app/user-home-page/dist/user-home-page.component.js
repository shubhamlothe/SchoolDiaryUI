"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserHomePageComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var UserHomePageComponent = /** @class */ (function () {
    function UserHomePageComponent(router, Http, datePipe) {
        this.router = router;
        this.Http = Http;
        this.datePipe = datePipe;
        this.isDisplay = false;
        this.isFaculty = false;
        this.isAdmin = false;
        this.isStudent = false;
        this.n = new http_client_service_service_1.notice(null, null, null, null, null);
        this.myDate = new Date();
        this.user = new http_client_service_service_1.User();
    }
    UserHomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['homepage']);
        }
        else {
            this.Http.getUser(sessionStorage.getItem('id')).subscribe(function (res) {
                _this.user = res;
            });
        }
        this.getdetails();
        this.getGlobalNotice();
    };
    UserHomePageComponent.prototype.getclsNoticeForStudent = function () {
        var _this = this;
        this.Http.getStudentClas(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.n.student_class = res.student_class;
            var latest_date = _this.datePipe.transform(_this.myDate, 'ddMMyyyy');
            _this.n.date_to = latest_date;
            _this.getNotice();
        });
    };
    UserHomePageComponent.prototype.approveUser = function () {
        this.router.navigate(['approveUser']);
    };
    UserHomePageComponent.prototype.getclsNoticeForFaculty = function () {
        var _this = this;
        this.Http.getFacultyClass(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.n.student_class = res.teaching_class;
            var latest_date = _this.datePipe.transform(_this.myDate, 'ddMMyyyy');
            _this.n.date_to = latest_date;
            _this.getNotice();
        });
    };
    UserHomePageComponent.prototype.getNotice = function () {
        var _this = this;
        this.Http.getClassNotice(this.n).subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                res[i].date_from = res[i].date_from.slice(0, 2) + "-" + res[i].date_from.slice(2, 4) + "-" + res[i].date_from.slice(4, 8);
                res[i].date_to = res[i].date_to.slice(0, 2) + "-" + res[i].date_to.slice(2, 4) + "-" + res[i].date_to.slice(4, 8);
            }
            _this.clsNotice = res;
        });
    };
    UserHomePageComponent.prototype.getGlobalNotice = function () {
        var _this = this;
        this.n.student_class = 0;
        var latest_date = this.datePipe.transform(this.myDate, 'ddMMyyyy');
        this.n.date_to = latest_date;
        this.Http.getGlobalNotice(this.n).subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                res[i].date_from = res[i].date_from.slice(0, 2) + "-" + res[i].date_from.slice(2, 4) + "-" + res[i].date_from.slice(4, 8);
                res[i].date_to = res[i].date_to.slice(0, 2) + "-" + res[i].date_to.slice(2, 4) + "-" + res[i].date_to.slice(4, 8);
            }
            _this.globalNotice = res;
        });
    };
    UserHomePageComponent.prototype.viewProfile = function () {
        this.router.navigate(['viewProfile']);
    };
    UserHomePageComponent.prototype.noticeUpdate = function () {
        this.router.navigate(['noticeUpdate']);
    };
    UserHomePageComponent.prototype.addAttendance = function () {
        this.router.navigate(['applyAttendance']);
    };
    UserHomePageComponent.prototype.getAttendance = function () {
        this.router.navigate(['attendance']);
    };
    UserHomePageComponent.prototype.getdetails = function () {
        var _this = this;
        this.Http.getUser(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.role_id = res.role_id;
            if (_this.role_id == 0) {
                _this.isDisplay = true;
                _this.isAdmin = true;
                _this.isFaculty = false;
                _this.isStudent = false;
                var latest_date = _this.datePipe.transform(_this.myDate, 'ddMMyyyy');
                _this.Http.getAllNoticeForAdmin(latest_date).subscribe(function (res) {
                    _this.clsNotice = res;
                });
            }
            else if (_this.role_id == 1) {
                _this.isDisplay = true;
                _this.isFaculty = true;
                _this.isAdmin = false;
                _this.isStudent = false;
                _this.getclsNoticeForFaculty();
            }
            else if (_this.role_id == 2 || _this.role_id == 3) {
                _this.isDisplay = false;
                _this.isStudent = true;
                _this.isAdmin = false;
                _this.isFaculty = false;
                _this.getclsNoticeForStudent();
            }
            else {
                _this.isDisplay = false;
                _this.isAdmin = false;
                _this.isFaculty = false;
                _this.isStudent = false;
            }
        });
    };
    UserHomePageComponent.prototype.logout = function () {
        sessionStorage.removeItem('id');
        this.router.navigate(['homepage']);
    };
    UserHomePageComponent.prototype.profile = function () {
        this.router.navigate(['viewProfile']);
    };
    UserHomePageComponent.prototype.disResult = function () {
        this.router.navigate(['result']);
    };
    UserHomePageComponent.prototype.addNotice = function () {
        this.router.navigate(['noticeUpdate']);
    };
    UserHomePageComponent.prototype.addResult = function () {
        this.router.navigate(['result']);
    };
    UserHomePageComponent.prototype.attendance = function () {
        this.router.navigate(['attendance']);
    };
    UserHomePageComponent.prototype.raiseRequest = function () {
        this.router.navigate(['raiseRequest']);
    };
    UserHomePageComponent.prototype.back = function () {
        this.router.navigate(['userHome']);
    };
    UserHomePageComponent.prototype.home = function () {
        this.router.navigate(['userHome']);
    };
    UserHomePageComponent.prototype.vProfile = function () {
        this.router.navigate(['viewProfile']);
    };
    UserHomePageComponent.prototype.result = function () {
        this.router.navigate(['result']);
    };
    UserHomePageComponent.prototype.notices = function () {
        this.router.navigate(['noticeUpdate']);
    };
    UserHomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-user-home-page',
            templateUrl: './user-home-page.component.html',
            styleUrls: ['./user-home-page.component.css'],
            providers: [common_1.DatePipe]
        })
    ], UserHomePageComponent);
    return UserHomePageComponent;
}());
exports.UserHomePageComponent = UserHomePageComponent;
