(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myreports-myreports-module"],{

/***/ "./src/app/modules/myreports/myreports-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/myreports/myreports-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MyreportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreportsRoutingModule", function() { return MyreportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myreports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myreports.component */ "./src/app/modules/myreports/myreports.component.ts");




var routes = [{ path: '', component: _myreports_component__WEBPACK_IMPORTED_MODULE_3__["MyreportsComponent"] }];
var MyreportsRoutingModule = /** @class */ (function () {
    function MyreportsRoutingModule() {
    }
    MyreportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MyreportsRoutingModule);
    return MyreportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/myreports/myreports.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/myreports/myreports.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-sf\">My <span>Reports</span></h1>\n<ul class=\"reports\">\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n  <li class=\"item\">\n    <mat-card class=\"item-card\">\n      <mat-card-header>\n        <div mat-card-avatar>SF</div>\n        <mat-card-title>Juan Perez</mat-card-title>\n        <mat-card-subtitle>Calle 54 c · 80 70 Kenedy</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz\n          ..\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>Ir</button>\n        <button mat-button>Asignar</button>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/modules/myreports/myreports.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/myreports/myreports.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reports {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap; }\n  .reports .item {\n    width: 250px;\n    margin: 10px; }\n  .reports .item .mat-card-avatar {\n      background-color: #51b256;\n      text-align: center;\n      line-height: 2;\n      font-size: 20px;\n      color: white;\n      font-family: 'Carter One', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huLmZvbnNlY2EvcHJvamVjdHMvc2FmZWNpdHkvcGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL215cmVwb3J0cy9teXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUhuQjtJQU1RLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFQcEI7TUFVWSx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO01BQ2YsWUFBWTtNQUNaLGtDQUFrQyxFQUFBIiwiZmlsZSI6InBhY2thZ2VzL3NhZmVjaXR5L3NyYy9hcHAvbW9kdWxlcy9teXJlcG9ydHMvbXlyZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuaXRlbSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIC5tYXQtY2FyZC1hdmF0YXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxYjI1NjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDYXJ0ZXIgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/myreports/myreports.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/myreports/myreports.component.ts ***!
  \**********************************************************/
/*! exports provided: MyreportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreportsComponent", function() { return MyreportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MyreportsComponent = /** @class */ (function () {
    function MyreportsComponent() {
    }
    MyreportsComponent.prototype.ngOnInit = function () {
    };
    MyreportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myreports',
            template: __webpack_require__(/*! ./myreports.component.html */ "./src/app/modules/myreports/myreports.component.html"),
            styles: [__webpack_require__(/*! ./myreports.component.scss */ "./src/app/modules/myreports/myreports.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyreportsComponent);
    return MyreportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/myreports/myreports.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/myreports/myreports.module.ts ***!
  \*******************************************************/
/*! exports provided: MyreportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreportsModule", function() { return MyreportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _myreports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myreports-routing.module */ "./src/app/modules/myreports/myreports-routing.module.ts");
/* harmony import */ var _myreports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myreports.component */ "./src/app/modules/myreports/myreports.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");






var MyreportsModule = /** @class */ (function () {
    function MyreportsModule() {
    }
    MyreportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_myreports_component__WEBPACK_IMPORTED_MODULE_4__["MyreportsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _myreports_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyreportsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ]
        })
    ], MyreportsModule);
    return MyreportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=myreports-myreports-module.js.map