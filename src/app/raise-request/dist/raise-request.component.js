"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RaiseRequestComponent = void 0;
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var RaiseRequestComponent = /** @class */ (function () {
    function RaiseRequestComponent(Http, router) {
        this.Http = Http;
        this.router = router;
        this.user = new http_client_service_service_1.User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.query = new http_client_service_service_1.UserQuery(null, null, null, null, null, null, null);
    }
    RaiseRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = sessionStorage.getItem('id');
        this.Http.getUser(id).subscribe(function (res) {
            _this.user = res;
            _this.query.name = _this.user.fName + ' ' + _this.user.lName;
            _this.query.contactPersonEmail = _this.user.email_id;
            _this.query.roleid = _this.user.role_id;
            // alert(this.user.userId);
            _this.query.userid = _this.user.userId;
            // alert(this.query.userid);
        });
    };
    RaiseRequestComponent.prototype.insertQuery = function () {
        var _this = this;
        this.Http.insertQuery(this.query).subscribe(function (res) {
            alert('We will contact you soon');
            _this.router.navigate(['/parentHome']);
        });
    };
    RaiseRequestComponent.prototype.back = function () {
        this.router.navigate(['userHome']);
    };
    RaiseRequestComponent = __decorate([
        core_1.Component({
            selector: 'app-raise-request',
            templateUrl: './raise-request.component.html',
            styleUrls: ['./raise-request.component.css']
        })
    ], RaiseRequestComponent);
    return RaiseRequestComponent;
}());
exports.RaiseRequestComponent = RaiseRequestComponent;
