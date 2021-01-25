"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SideBarComponent = void 0;
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new http_client_service_service_1.User();
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser().subscribe(function (res) {
            _this.user = res;
        });
    };
    SideBarComponent.prototype.home = function () {
        this.router.navigate(['userHome']);
    };
    SideBarComponent.prototype.vProfile = function () {
        this.router.navigate(['viewProfile']);
    };
    SideBarComponent.prototype.attendance = function () {
        this.router.navigate(['attendance']);
    };
    SideBarComponent.prototype.result = function () {
        this.router.navigate(['result']);
    };
    SideBarComponent.prototype.notices = function () {
        this.router.navigate(['noticeUpdate']);
    };
    SideBarComponent.prototype.allNOtice = function () {
        this.router.navigate(['allNotice']);
    };
    SideBarComponent.prototype.canSeeResult = function () {
        var role_id = this.user ? this.user.role_id : null;
        return role_id === 2 || role_id === 3 || role_id === 1;
    };
    SideBarComponent.prototype.canAddNotices = function () {
        var role_id = this.user ? this.user.role_id : null;
        return role_id === 0 || role_id === 1;
    };
    SideBarComponent.prototype.getAllNotic = function () {
        var role_id = this.user ? this.user.role_id : null;
        return role_id === 2 || role_id === 3;
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'app-side-bar',
            templateUrl: './side-bar.component.html',
            styleUrls: ['./side-bar.component.css']
        })
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
