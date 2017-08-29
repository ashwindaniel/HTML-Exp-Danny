# HTML-Exp-Danny
## This Repository consists of my works in Front End Development Program
#### Milestones covered so far
- [x] HTML5
    1. [x] Tags
    2. [x] New Features
    3. [ ] Web Workers
    4. [ ] Cache and other Offline things
- [x] CSS
    1. [x] Syntax of scss and css
    2. [x] Bootstrap
    3. [ ] Flexbox
- [ ] JavaScripts
    1. [x] Basic programing
    2. [x] Regex
    3. [ ] Angularjs
- [ ] ES6
    - Haven't yet explored
- [x] Angular 4
    1. [x] CLI
    2. [x] Tower of Hero
    - [ ] Yet to explore
- [x] Gulp
    1. [x] Basic features .src .dest .task .watch
    2. [x] Understanding node.js
    3. [x] Making Enviroment for linting and minifying
    4. [x] Automate Building tool for the project

> The build requires Node.js ^6.9.1 at the time of development will update if need be

### **Dependencies**
{
-    "node": "^6.9.1",
-    "browser-sync": "^2.18.13",
-    "gulp": "^3.9.1",
-    "gulp-clean-css": "^3.7.0",
-    "gulp-concat": "^2.6.1",
-    "gulp-jshint": "^2.0.4",
-    "gulp-minify": "^1.0.0",
-    "gulp-rename": "^1.2.2",
-    "gulp-sass": "^3.1.0",
-    "gulp-uglify": "^3.0.0",
-    "gulp-util": "^3.0.8",
-    "jshint": "^2.9.5",
-    "jshint-stylish": "^2.2.1",
-    "map-stream": "0.0.7",
}

## Structure of the build
-   Final *ALL MINIFIED FILES PRODUCTION FILES ARE HERE*
    - css *a css files minified*
    - js *a js files minified*
    - img *images unsed in app*
    - media *was be used to keep all the media elements*
    - pages *all the pages in the app*
    - index.html *SPA that acts as renderer*
- Source *SOURCE FILES THAT WILL BE USED TO BUILD Final Codes*
    - css
    - img
    - js
    - media
    - pages
    - index.html
- node_modules *npm repo*
- package.json *npm project descriptor*
- gulpfile.js *The file that consists of build enviroment codes for gulp*

## Behaviour
On node terminal enter `gulp` to run building
On build completion **Gulp** will automatically run **browser-sync** that provides web server and launches the app automatically
edit in `index.html`, `js`, `scss`, `pages`& other folder and changes will automatically reflect in `Final`
any errors in javascript will show in linting on console.