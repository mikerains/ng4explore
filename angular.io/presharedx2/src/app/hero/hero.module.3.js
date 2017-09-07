"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var hero_component_3_1 = require("./hero.component.3");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_list_component_1 = require("./hero-list.component");
var highlight_directive_1 = require("./highlight.directive");
var hero_routing_module_3_1 = require("./hero-routing.module.3");
var HeroModule = (function () {
    function HeroModule() {
    }
    return HeroModule;
}());
HeroModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, hero_routing_module_3_1.HeroRoutingModule],
        declarations: [
            hero_component_3_1.HeroComponent, hero_detail_component_1.HeroDetailComponent, hero_list_component_1.HeroListComponent,
            highlight_directive_1.HighlightDirective
        ]
    })
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.3.js.map