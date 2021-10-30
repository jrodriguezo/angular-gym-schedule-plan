# AngularGymSchedulePlan - Foods4Bulking 

![image](https://user-images.githubusercontent.com/36509669/138559208-bee658b5-95ca-4e18-adfa-c403556bfb08.png)

Project in progress...

- Make your daily routine; Make a plan. Insert the foods you would like to get macros from the CalorieNinjas API data. If you are not agree with the response given, then you can modify them.

![image](https://user-images.githubusercontent.com/36509669/138559271-ab48c8df-83d1-426f-9a9c-8fda24c8b555.png)

- An example could be

![image](https://user-images.githubusercontent.com/36509669/138557857-10c46514-1faa-4667-b6ed-747c3990b9f3.png)

Version 1.0.0 will be achieved when the following milestones are completed:

- [x] CalorieNinjas API implemented
- [ ] Basic UX/UI
- [ ] Schedule
- [ ] Index (Cover Page)
- [ ] Navigation
- [x] NodeJS / Express
- [x] MongoDB

# About the project

Steps to use the application:

In two differentes nodes (typically inside visual studio code) run the following commands lines

```js
ng serve                                // For angular client http://localhost:4200
```
```js
npm run start:server                    // For starting Node.js in local http://localhost:3000
```
In two differentes cmds (typically in Windows, typing 'cmd' on search box) for running database in MongoDB.
```js
mongod --dbpath path\to\data\db         // Previously added two folders inside, for instance, in backend directory
```
```js
mongo localhost:27017                   // For openning the console line
```
## + Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Author 

[@jrodriguezo](https://github.com/jrodriguezo)
