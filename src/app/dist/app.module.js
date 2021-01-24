"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var homepage_component_1 = require("./homepage/homepage.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var login_component_1 = require("./login/login.component");
var forget_password_component_1 = require("./forget-password/forget-password.component");
var view_profile_component_1 = require("./view-profile/view-profile.component");
var user_home_page_component_1 = require("./user-home-page/user-home-page.component");
var notice_update_component_1 = require("./notice-update/notice-update.component");
var attendance_component_1 = require("./attendance/attendance.component");
var result_component_1 = require("./result/result.component");
var approve_user_component_1 = require("./approve-user/approve-user.component");
var raise_request_component_1 = require("./raise-request/raise-request.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                register_component_1.RegisterComponent,
                homepage_component_1.HomepageComponent,
                login_component_1.LoginComponent,
                forget_password_component_1.ForgetPasswordComponent,
                view_profile_component_1.ViewProfileComponent,
                user_home_page_component_1.UserHomePageComponent,
                notice_update_component_1.NoticeUpdateComponent,
                attendance_component_1.AttendanceComponent,
                result_component_1.ResultComponent,
                approve_user_component_1.ApproveUserComponent,
                raise_request_component_1.RaiseRequestComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_fontawesome_1.FontAwesomeModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                common_1.CommonModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
