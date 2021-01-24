"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticeUpdateComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var NoticeUpdateComponent = /** @class */ (function () {
    function NoticeUpdateComponent(router, datePipe, HttpClientService) {
        this.router = router;
        this.datePipe = datePipe;
        this.HttpClientService = HttpClientService;
        this.isF = false;
        this.isA = false;
        this.noticeUpdate = new http_client_service_service_1.notice();
        this.user = new http_client_service_service_1.User();
    }
    NoticeUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['homepage']);
        }
        else {
            this.HttpClientService.getUser(sessionStorage.getItem('id')).subscribe(function (res) {
                _this.user = res;
            });
        }
        this.getdetails();
    };
    NoticeUpdateComponent.prototype.back = function () {
        this.router.navigate(['userHome']);
    };
    NoticeUpdateComponent.prototype.onClassSelected = function (cls) {
        this.noticeUpdate.student_class = cls;
    };
    NoticeUpdateComponent.prototype.Add = function () {
        // this.noticeUpdate.notice_id = 1;
        this.noticeUpdate.date_to = this.datePipe.transform(this.noticeUpdate.date_to, 'ddMMyyyy');
        this.noticeUpdate.date_from = this.datePipe.transform(this.noticeUpdate.date_from, 'ddMMyyyy');
        this.HttpClientService.addNotice(this.noticeUpdate).subscribe(function (res) {
            alert("added");
        });
    };
    NoticeUpdateComponent.prototype.getdetails = function () {
        var _this = this;
        this.HttpClientService.getUser(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.role_id = res.role_id;
            if (_this.role_id == 0) {
                _this.isA = true;
            }
            else if (_this.role_id == 1) {
                _this.isF = true;
            }
        });
    };
    NoticeUpdateComponent.prototype.logout = function () {
        sessionStorage.removeItem('id');
        this.router.navigate(['homepage']);
    };
    NoticeUpdateComponent.prototype.home = function () {
        this.router.navigate(['userHome']);
    };
    NoticeUpdateComponent.prototype.vProfile = function () {
        this.router.navigate(['viewProfile']);
    };
    NoticeUpdateComponent.prototype.attendance = function () {
        this.router.navigate(['attendance']);
    };
    NoticeUpdateComponent.prototype.result = function () {
        this.router.navigate(['result']);
    };
    NoticeUpdateComponent.prototype.notices = function () {
        this.router.navigate(['notices']);
    };
    NoticeUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-notice-update',
            templateUrl: './notice-update.component.html',
            styleUrls: ['./notice-update.component.css'],
            providers: [common_1.DatePipe]
        })
    ], NoticeUpdateComponent);
    return NoticeUpdateComponent;
}());
exports.NoticeUpdateComponent = NoticeUpdateComponent;
