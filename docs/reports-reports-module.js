(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/modules/reports/reports-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/modules/reports/reports.component.ts");




var routes = [{ path: '', component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"] }];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/reports/reports.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/reports/reports.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-sf\">All <span>Reports</span></h1>\n<ul class=\"reports\">\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/modules/reports/reports.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/reports/reports.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reports {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap; }\n  .reports .item {\n    width: 250px;\n    margin: 10px; }\n  .reports .item .mat-card-avatar {\n      background-color: #51b256;\n      text-align: center;\n      line-height: 2;\n      font-size: 20px;\n      color: white;\n      font-family: 'Carter One', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huLmZvbnNlY2EvcHJvamVjdHMvc2FmZWNpdHkvcGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZSxFQUFBO0VBSG5CO0lBTVEsWUFBWTtJQUNaLFlBQVksRUFBQTtFQVBwQjtNQVVZLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7TUFDZixZQUFZO01BQ1osa0NBQWtDLEVBQUEiLCJmaWxlIjoicGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLml0ZW0ge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgICAubWF0LWNhcmQtYXZhdGFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MWIyNTY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2FydGVyIE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/reports/reports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/modules/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/reports/reports.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/reports/reports-routing.module.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports.component */ "./src/app/modules/reports/reports.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");







var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map