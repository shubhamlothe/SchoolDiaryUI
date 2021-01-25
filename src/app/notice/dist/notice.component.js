"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticeComponent = void 0;
var core_1 = require("@angular/core");
var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    NoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.getItem('id')) {
            this.router.navigate(['homepage']);
        }
        this.http.getAllNotic().subscribe(function (res) {
            _this.alNotice = res;
        });
    };
    NoticeComponent = __decorate([
        core_1.Component({
            selector: 'app-notice',
            templateUrl: './notice.component.html',
            styleUrls: ['./notice.component.css']
        })
    ], NoticeComponent);
    return NoticeComponent;
}());
exports.NoticeComponent = NoticeComponent;
