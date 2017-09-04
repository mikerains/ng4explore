# ng4explore
Repo contains project folders each of which is a sample AngularN WebApp (N >=2)   (◔_◔)

### References
[Ng Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)

Compiler talk: https://www.youtube.com/watch?v=kW9cJsvcsGo

# Phases
## 10. Lazy-loaded Modules with webpack loaders
[NgModule 5 Example Projects](https://angular.io/docs/ts/latest/guide/ngmodule.html) - Look for "Live examples".  [The zip files are in this repo folder](.ExamplesFromAngujlar.io/ngModuleLiveExamples).  These examples gets into routing, so see also [Routing Tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html) and [Routing & Navigation](https://angular.io/docs/ts/latest/guide/router.html).  One interesting section of Routing and Navigation is [Activated Routes](https://angular.io/docs/ts/latest/guide/router.html#!#activated-route) and [Appendix on parameters array](https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array).

I never did figure out how to deal with route maps when an XXX.html is in the URL.  Right now it works for me when the HTML server is serving from the folder.  So in the Live Example,s the "4 - Final" works right, but for "3 - Pre-shared" i have to put in a route map like:
```javascript
  { path: 'index.3.html', redirectTo: 'contact', pathMatch: 'full'},
```

## 20. Nested State Routing
## 30. Material Design
## 40. Webpack sourcemaps debuggable in Chrome
## 50. Forms Generator
## 60. Reactive Forms Generator
The angular.io "Techniques" section has a sub-section "Deployment", and on that page there is a heading "Ahead Of Time Compilcation".  (link: https://angular.io/guide/deployment#ahead-of-time-aot-compilation).  In that section, there is a link to "Webpack: An Introduction" (link: https://angular.io/guide/webpack) which proclaims "Webpack is a popular module bundler, a tool for bundling application source code in convenient chunks and for loading that code from a server into a browser.  It's an excellent alternative to the SystemJS approach used elsewhere in the documentation."

## 80. Secured with Facebook, Live and Google


