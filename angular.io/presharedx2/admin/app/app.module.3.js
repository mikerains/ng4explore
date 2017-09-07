"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
/* App Root */
var app_component_3_1 = require("./app.component.3");
var highlight_directive_1 = require("./highlight.directive");
var title_component_1 = require("./title.component");
var user_service_1 = require("./user.service");
/* Feature Modules */
var contact_module_3_1 = require("./contact/contact.module.3");
/* Routing Module */
var app_routing_module_3_1 = require("./app-routing.module.3");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            contact_module_3_1.ContactModule,
            app_routing_module_3_1.AppRoutingModule
        ],
        providers: [user_service_1.UserService],
        declarations: [app_component_3_1.AppComponent, highlight_directive_1.HighlightDirective, title_component_1.TitleComponent],
        bootstrap: [app_component_3_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.3.js.map