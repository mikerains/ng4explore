Notes started Sep 01, 2017

# This folder contains Example Download Code from Angular.io
*  cli-quickstart comes from https://angular.io/guide/quickstart
*  preshared.3 comes from https://angular.io/guide/ngmodule
   * This page has several downloads, look for the one in the section "Lazy-loading modules with the router"
*  quickstart comes from https://angular.io/guide/setup
* webpack-angular comes from https://angular.io/guide/webpack which has an example project https://angular.io/generated/zips/webpack/webpack.zip


# AOT (I wrote these same notes in github/com/mikerains/ng4explore/README.md)
The angular.io "Techniques" section has a sub-section "Deployment", and on that page there is a heading "Ahead Of Time Compilcation".  (link: https://angular.io/guide/deployment#ahead-of-time-aot-compilation).  In that section, there is a link to "Webpack: An Introduction" (link: https://angular.io/guide/webpack) which proclaims "Webpack is a popular module bundler, a tool for bundling application source code in convenient chunks and for loading that code from a server into a browser.  It's an excellent alternative to the SystemJS approach used elsewhere in the documentation."

##  npm build:aot vs. ng build --aot vs. Angular Webpack and the Angular Webpack AOT plugin
* npm build is for non CLI projects; it is a convenience script in package.json that compiles with tsc.
   * npm build:aot is a convenience script that compiles with ngc and uses the *-aot.json config files (ie: tsconfig-aot.json and rollup-config-aot.json)
* ng build:aot is used when using the angular CLI, since the webpack confifg is hidden.  Even the npm builf script is "ng build".
* Angular Webpack is for non-CLI projects that want to use webpack, see: https://angular.io/guide/webpack
   * Angular AOT Webpack Plugin is found at: https://github.com/angular/angular-cli/tree/master/packages/%40ngtools/webpack


*  project configuration
   * https://angular.io/guide/aot-compiler
   * https://angular.io/guide/metadata
   * https://angular.io/guide/deployment#ahead-of-time-aot-compilation
      * tsconfig-aot.json having an "anfularCompileOptions" section
      * compile with "node_modules/.bin/ngc" -p tsconfig-aot.json
      * bootstrap with platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
      * roolup treeshaking (need some npm packages and rollup-config.js, see examples in "aot-compiler" link above)
      * uglify() (used in rollup-config.js to minify after tree-shaking)
      * load bundle witg <script src="build.js"></script> , instead of systemJs

   * develop with SystemJs and JIT, prod with AOT

In the angular.io "Webpack: An Introduction" There is an example download:  https://angular.io/generated/zips/webpack/webpack.zip




