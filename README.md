# HTML-Exp-Danny
## This Repository consists of my works in Front End Development Program
#### Milestones covered so far
- [x] HTML5
    1. [x] Introduction
    2. [x] New Tags
    3. [x] New Features
    4. [x] Cache and other Offline things
    5. [x] Forms
    6. [x] Drag and drop
    7. [ ] Websockets
    8. [x] Server-sent Events
    9. [x] Custom Elements (Webcomponents)
    10. [x] Editable content
    11. [x] History API
    12. [x] Touch Events
    13. [x] Geolocation and Gmaps
    14. [x] Video and Audio
    15. [x] Device orientation
- [x] CSS
    1. [x] Syntax of scss and css
    2. [x] Bootstrap
    3. [ ] Flexbox
    4. [x] Transitions and animations
    5. [x] Multi-column layout
    6. [x] Selectors and pseudo-classes
    7. [ ] Media queries

- [x] JavaScripts
    1. [x] Basic programing
    2. [x] Regex
    3. [x] Angularjs
    4. [x] Introduction
    5. [x] Values, Types, and Operators
    6. [ ] Program Structure
    7. [ ] Functions
    8. [ ] Data Structures: Objects and Arrays
    9. [ ] Bugs and Error Handling
    10. [ ] JavaScript and the Browser
    11. [ ] The Document Object Model
    12. [ ] Forms and Form Fields

- [ ] ES6
    1. [x] Introduction
    2. [ ] Block Bindings
    3. [ ] Functions
    4. [ ] Expanded Object Functionality
    5. [ ] Sets and Maps
    6. [ ] Iterators and Generators
    7. [ ] Introducing Javascript Classes
    8. [ ] Promises and Asynchronous Programming
    9. [ ] Encapsulating Code with Modules

- [x] Angular 4
    1. [x] Introduction
    2. [x] CLI
    3. [ ] Tower of Hero
    4. [ ] Hero Editor
    5. [ ] Master/Detail
    6. [ ] Multiple Components
    7. [ ] Services
    8. [ ] Routing
    9. [ ] HTTP

- [x] Gulp
    1. [x] Basic features .src .dest .task .watch
    2. [x] Understanding node.js
    3. [x] Making Enviroment for linting and minifying
    4. [x] Automate Building tool for the project

- [x] Misc
    1. [x] Higher-order Functions
    2. [x] Regular Expressions
    3. [ ] Modules
    4. [ ] Handling Events
    5. [ ] HTTP
    6. [x] Node.js
    7. [ ] Front-end Build Tools

> The build requires Node.js ^6.9.1 at the time of development will update if need be

### **Dependencies**
-{
-    "angularjs": "^1.6.5",
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
-    "map-stream": "0.0.7"
-}

## Instructions
- Open Node terminal in your project directory
- On node terminal First install all dependencies using `npm install` to download all node_modules
- Then on node terminal enter `gulp` to run building
- **Gulp will automatically** create bin folder and run web server.
- On build completion **Gulp** will automatically run **browser-sync** that provides web server and launches the app automatically.
- Edit in `index.html`, `js`, `scss`, `pages`& other folder and changes will automatically reflect in `bin` folder any errors in javascript will show in linting on console.

## Structure of the build
- **bin** :*ALL MINIFIED FILES PRODUCTION FILES ARE HERE*
    - **css** :*a css files minified*
    - **js** :*a js files minified*
    - **img** :*images unsed in app*
    - **media** :*was used to keep all the media elements*
    - **pages** :*all the pages in the app*
    - **index**.html :*SPA that acts as renderer*
- **Source** :*SOURCE FILES THAT WILL BE USED TO BUILD bin Codes are written here*
    - **css** :*css sass from scss all files seperate*
    - **scss** :*scss style files written to be converted into css style file by gulp*    
    - **img** :*images unsed in app*
    - **js** :*all javascripts are in the app in source code and in seperate js files*
    - **media** :*depricated- all media content are now hosted on One Drive*
    - **pages** :*template pages used in the app*
    - **index**.html :*the main html page that contains renderer from angularjs*
- **Assignments** :*Some assignment practices not part of the app or the build*
- **node_modules** :*npm dependencies*
- **package.json** :*npm project descriptor*
- **gulpfile.js** :*The file that consists of build enviroment codes for gulp*
- **_config.yml** :*repository theme settings*
- **.gitattribute** :*repository attributes*
- **.gitignore** :*repository rules to ignore bin and node_module folder*


