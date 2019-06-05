(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporting-reporting-module"],{

/***/ "./src/app/modules/reporting/reporting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/reporting/reporting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ReportingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingRoutingModule", function() { return ReportingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting.component */ "./src/app/modules/reporting/reporting.component.ts");




var routes = [{ path: '', component: _reporting_component__WEBPACK_IMPORTED_MODULE_3__["ReportingComponent"] }];
var ReportingRoutingModule = /** @class */ (function () {
    function ReportingRoutingModule() {
    }
    ReportingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportingRoutingModule);
    return ReportingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-sf\">Repor<span>ting</span></h1>\n<div class=\"reporting\">\n  <div style=\"width: 640px; height: 480px\" id=\"mapContainer\"></div>\n  <form>\n    <h2>You want report a case?</h2>\n    <mat-form-field>\n      <input matInput placeholder=\"Address\" required />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Type\" required />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Case Name\" required />\n    </mat-form-field>\n    <mat-form-field>\n      <textarea\n        matInput\n        placeholder=\"Case Description\"\n        required\n        cols=\"30\"\n        rows=\"10\"\n      ></textarea>\n    </mat-form-field>\n    <div class=\"from-action\">\n      <button mat-button>Report</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reporting {\n  display: flex; }\n  .reporting mat-form-field {\n    display: block; }\n  .reporting h2 {\n    color: #666666;\n    margin-top: 0; }\n  .reporting form {\n    width: calc(100% - 380px);\n    padding: 0 20px 20px; }\n  .reporting button {\n    background: linear-gradient(-135deg, #57b847, #1281ca);\n    color: white;\n    width: 200px; }\n  .reporting .from-action {\n    display: flex;\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huLmZvbnNlY2EvcHJvamVjdHMvc2FmZWNpdHkvcGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL3JlcG9ydGluZy9yZXBvcnRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFJUSxjQUFjLEVBQUE7RUFKdEI7SUFRUSxjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBVHJCO0lBYVEseUJBQXlCO0lBQ3pCLG9CQUFvQixFQUFBO0VBZDVCO0lBa0JRLHNEQUFzRDtJQUN0RCxZQUFZO0lBQ1osWUFBWSxFQUFBO0VBcEJwQjtJQXdCUSxhQUFhO0lBQ2IseUJBQXlCLEVBQUEiLCJmaWxlIjoicGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL3JlcG9ydGluZy9yZXBvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzgwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzU3Yjg0NywgIzEyODFjYSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIC5mcm9tLWFjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/reporting/reporting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/reporting/reporting.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingComponent", function() { return ReportingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ReportingComponent = /** @class */ (function () {
    function ReportingComponent() {
    }
    ReportingComponent.prototype.ngOnInit = function () {
    };
    ReportingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporting',
            template: __webpack_require__(/*! ./reporting.component.html */ "./src/app/modules/reporting/reporting.component.html"),
            styles: [__webpack_require__(/*! ./reporting.component.scss */ "./src/app/modules/reporting/reporting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "./src/app/modules/reporting/reporting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/reporting/reporting.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingModule", function() { return ReportingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting-routing.module */ "./src/app/modules/reporting/reporting-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reporting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting.component */ "./src/app/modules/reporting/reporting.component.ts");






var ReportingModule = /** @class */ (function () {
    function ReportingModule() {
    }
    ReportingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reporting_component__WEBPACK_IMPORTED_MODULE_5__["ReportingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportingRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]
            ]
        })
    ], ReportingModule);
    return ReportingModule;
}());



/***/ })

}]);
//# sourceMappingURL=reporting-reporting-module.js.map