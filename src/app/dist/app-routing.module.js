"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var homepage_component_1 = require("./homepage/homepage.component");
var login_component_1 = require("./login/login.component");
var forget_password_component_1 = require("./forget-password/forget-password.component");
var view_profile_component_1 = require("./view-profile/view-profile.component");
var user_home_page_component_1 = require("./user-home-page/user-home-page.component");
var notice_update_component_1 = require("./notice-update/notice-update.component");
var attendance_component_1 = require("./attendance/attendance.component");
var result_component_1 = require("./result/result.component");
var approve_user_component_1 = require("./approve-user/approve-user.component");
var raise_request_component_1 = require("./raise-request/raise-request.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var routes = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'homepage', component: homepage_component_1.HomepageComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forget', component: forget_password_component_1.ForgetPasswordComponent },
    { path: 'viewProfile', component: view_profile_component_1.ViewProfileComponent },
    { path: 'userHome', component: user_home_page_component_1.UserHomePageComponent },
    { path: 'noticeUpdate', component: notice_update_component_1.NoticeUpdateComponent },
    { path: 'attendance', component: attendance_component_1.AttendanceComponent },
    { path: 'result', component: result_component_1.ResultComponent },
    { path: 'approveUser', component: approve_user_component_1.ApproveUserComponent },
    { path: 'raiseRequest', component: raise_request_component_1.RaiseRequestComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
