# ng4explore
Repo contains project folders each of which is a sample AngularN WebApp (N >=2)   (◔_◔)

### References
[Ng Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)

# Phases
## 10. Lazy-loaded Modules with webpack loaders
[NgModule 5 Example Projects](https://angular.io/docs/ts/latest/guide/ngmodule.html) - Look for "Live examples".  The zip files are in this repo folder "ngModuleLiveExamples".  This gets into routing, so see also [Routing Tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html) and [Routing & Navigation](https://angular.io/docs/ts/latest/guide/router.html).  One interesting section of Routing and Navigation is [Activated Routes](https://angular.io/docs/ts/latest/guide/router.html#!#activated-route) and [Appendix on parameters array](https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array).

I never dids figure out how to deal with route maps when an XXX.html is in the URL.  Right now it works for me when the HTML server is serving from the folder.  So in the Live Example,s the "4 - Final" works right, but for "3 - Pre-shared" i have to put in a route map like:
{ path: 'index.3.html', redirectTo: 'contact', pathMatch: 'full'},

## 20. Nested State Routing
## 30. Material Design
## 40. Webpack sourcemaps debuggable in Chrome
## 50. Forms Generator
## 60. Reactive Forms Generator
## 70. AOT with https://www.npmjs.com/package/angular2-aot-webpack
## 80. Secured with Facebook, Live and Google


