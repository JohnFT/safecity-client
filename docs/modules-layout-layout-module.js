(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-layout-layout-module"],{

/***/ "./src/app/modules/layout/layout-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/layout/layout-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/modules/layout/layout.component.ts");




var childrens = [
    {
        path: 'reporting',
        loadChildren: '../reporting/reporting.module#ReportingModule'
    },
    {
        path: 'reports',
        loadChildren: '../reports/reports.module#ReportsModule'
    },
    {
        path: 'myreports',
        loadChildren: '../myreports/myreports.module#MyreportsModule'
    },
    {
        path: 'account',
        loadChildren: '../profile/profile.module#ProfileModule'
    }
];
var routes = [
    { path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], children: childrens }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"layout\" autosize>\n  <mat-drawer #drawer mode=\"side\">\n    <nav class=\"layout-nav\">\n      <ul>\n        <li>\n          <div class=\"avatar\">\n            SF\n          </div>\n          <p>John Alexander Fonseca</p>\n        </li>\n        <li><a  routerLink=\"/sf/reports\">All Reports</a></li>\n        <li><a routerLink=\"/sf/reporting\">Reporting</a></li>\n        <li><a routerLink=\"/sf/myreports\">My Reports</a></li>\n        <li><a routerLink=\"/sf/call\">Call Emegence</a></li>\n        <li><a routerLink=\"/sf/account\">My Profie</a></li>\n      </ul>\n    </nav>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-toolbar>\n      <h1 class=\"title-sf\">Safe<span>City</span></h1>\n      <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </mat-toolbar>\n    <div class=\"layout-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/modules/layout/layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/layout/layout.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-nav {\n  list-style: none; }\n  .layout-nav ul {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    font-size: 15px;\n    overflow: hidden; }\n  .layout-nav ul li {\n      list-style: none;\n      padding: 10px 0;\n      font-size: 14px; }\n  .layout-nav ul li .avatar {\n        height: 80px;\n        width: 80px;\n        border-radius: 50%;\n        background-color: #52b454;\n        text-align: center;\n        line-height: 1.8;\n        font-size: 50px;\n        color: white;\n        margin: 0 auto;\n        font-family: 'Carter One', cursive; }\n  .layout-nav ul li p {\n        color: white;\n        margin-bottom: 0; }\n  .layout-nav ul li a {\n        color: white;\n        text-decoration: none; }\n  mat-toolbar {\n  background: linear-gradient(-135deg, #57b847, #1281ca);\n  justify-content: space-between;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n  mat-drawer-container {\n  height: 100%; }\n  /deep/ .mat-drawer-inner-container {\n  background: #1281ca;\n  border: none;\n  min-width: 200px; }\n  .title-sf {\n  color: white; }\n  .layout-content {\n  max-width: 1270px;\n  margin: 40px auto;\n  padding: 40px;\n  background-color: white; }\n  .layout-content .title-sf {\n    color: #1281ca;\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huLmZvbnNlY2EvcHJvamVjdHMvc2FmZWNpdHkvcGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBZ0IsRUFBQTtFQURuQjtJQUlPLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQVJ2QjtNQVdXLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBYjFCO1FBZ0JlLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixZQUFZO1FBQ1osY0FBYztRQUVkLGtDQUFrQyxFQUFBO0VBMUJqRDtRQThCZSxZQUFZO1FBQ1osZ0JBQWdCLEVBQUE7RUEvQi9CO1FBbUNlLFlBQVk7UUFDWixxQkFBcUIsRUFBQTtFQU96QztFQUNJLHNEQUFzRDtFQUN0RCw4QkFBOEI7RUFDOUIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNLEVBQUE7RUFHVjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxZQUNKLEVBQUE7RUFFQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0VBSjNCO0lBT1EsY0FBYztJQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InBhY2thZ2VzL3NhZmVjaXR5L3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XG4gICAgJi1uYXYge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyYjQ1NDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDYXJ0ZXIgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzU3Yjg0NywgIzEyODFjYSk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vZGVlcC8gLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTI4MWNhO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4udGl0bGUtc2Yge1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuXG4ubGF5b3V0LWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTI3MHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAudGl0bGUtc2Yge1xuICAgICAgICBjb2xvcjogIzEyODFjYTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/modules/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/modules/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/modules/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/modules/layout/layout.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-layout-layout-module.js.map