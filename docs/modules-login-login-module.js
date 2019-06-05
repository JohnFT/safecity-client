(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./src/app/modules/login/login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");




var routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\n  <article class=\"login-body\">\n    <h1>Safe<span>City</span></h1>\n    <form class=\"form\">\n      <h2>Login</h2>\n      <div class=\"form-field\">\n        <input  placeholder=\"User\" required />\n        <i class=\"fas fa-user-alt\"></i>\n      </div>\n      <div class=\"form-field\">\n        <input type=\"password\" placeholder=\"Password\" required />\n        <i class=\"fas fa-lock\"></i>\n        <!--   <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error> -->\n      </div>\n      <a  routerLink=\"/sf/reporting\" class=\"btn-login\" mat-button>Sign In</a>\n    </form>\n  </article>\n</section>\n"

/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  background-color: #1281ca;\n  background: linear-gradient(-135deg, #57b847, #1281ca);\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .login-body {\n    padding: 40px;\n    background-color: white;\n    width: 80%;\n    justify-content: center;\n    max-width: 600px; }\n  .login-body h1 {\n      color: #1281ca;\n      font-size: 40px;\n      margin: 0; }\n  .login-body h1 span {\n        color: #57b847; }\n  .login-body .form {\n      max-width: 290px;\n      padding: 10px 60px 60px;\n      margin: 0 auto; }\n  .login-body .form h2 {\n        text-align: center;\n        color: #666666;\n        font-family: Roboto, \"Helvetica Neue\", sans-serif;\n        stroke: 2px; }\n  .login-body .form-field {\n        display: block;\n        position: relative; }\n  .login-body .form-field input {\n          font-size: 15px;\n          line-height: 1.5;\n          color: #666666;\n          display: block;\n          width: 100%;\n          background: #e6e6e6;\n          height: 50px;\n          border-radius: 25px;\n          padding: 0 30px 0 68px;\n          border: none;\n          margin: 5px 0;\n          box-sizing: border-box;\n          outline: none; }\n  .login-body .form-field i {\n          position: absolute;\n          top: 50%;\n          left: 30px;\n          font-size: 16px;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: #666666; }\n  .login-body .btn-login {\n      margin-top: 40px;\n      background: linear-gradient(-135deg, #57b847, #1281ca);\n      color: white;\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huLmZvbnNlY2EvcHJvamVjdHMvc2FmZWNpdHkvcGFja2FnZXMvc2FmZWNpdHkvc3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQUVuQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtFQUxuQjtNQVFPLGNBQWM7TUFDZCxlQUFlO01BQ2YsU0FBUyxFQUFBO0VBVmhCO1FBYVcsY0FDSixFQUFBO0VBZFA7TUFtQk8sZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixjQUFjLEVBQUE7RUFyQnJCO1FBd0JXLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsaURBQWlEO1FBQ2pELFdBQVcsRUFBQTtFQTNCdEI7UUFnQ1csY0FBYztRQUNkLGtCQUFrQixFQUFBO0VBakM3QjtVQW9DZSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLGNBQWM7VUFDZCxjQUFjO1VBQ2QsV0FBVztVQUNYLG1CQUFtQjtVQUNuQixZQUFZO1VBQ1osbUJBQW1CO1VBQ25CLHNCQUFzQjtVQUN0QixZQUFZO1VBQ1osYUFBYTtVQUNiLHNCQUFzQjtVQUN0QixhQUFhLEVBQUE7RUFoRDVCO1VBb0RlLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsVUFBVTtVQUNWLGVBQWU7VUFDZixtQ0FBMkI7a0JBQTNCLDJCQUEyQjtVQUMzQixjQUFjLEVBQUE7RUF6RDdCO01BZ0VPLGdCQUFnQjtNQUNoQixzREFBc0Q7TUFDdEQsWUFBWTtNQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJwYWNrYWdlcy9zYWZlY2l0eS9zcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjgxY2E7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsICM1N2I4NDcsICMxMjgxY2EpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMxMjgxY2E7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTdiODQ3XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjkwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHggNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBzdHJva2U6IDJweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAmLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMCA2OHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tbG9naW4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCAjNTdiODQ3LCAjMTI4MWNhKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.js.map