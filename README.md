# AngularGymSchedulePlan - Foods4Bulking 

![image](https://user-images.githubusercontent.com/36509669/142743726-1773ea02-f324-4e04-990a-7f642ca018de.png)

Project in progress...

- Make your daily routine; Make a plan. Insert the foods you would like to get macros from the CalorieNinjas API data. If you are not agree with the response given, then you can modify them.
- Use your personal account (in progress ...)

![image](https://user-images.githubusercontent.com/36509669/142772866-245cab0c-00df-4025-8951-5f9094a9ad12.png)

- Search your favourite food. Complete your plan.

![image](https://user-images.githubusercontent.com/36509669/142772885-75d7f41c-0e1e-447c-8f41-33633f74633c.png)

- Basic user experience added

![image](https://user-images.githubusercontent.com/36509669/142772911-26ec4232-d748-46a5-80b2-b9129b9179b5.png)

- An example could be. 

![image](https://user-images.githubusercontent.com/36509669/142772929-a4d4f395-8979-4c95-b43a-a11eb55bc798.png)
(Edit, delete & pagination are available!)

- Customize your macros

![image](https://user-images.githubusercontent.com/36509669/142773002-8668a2e0-19cb-4bfc-9581-7472334daaf3.png)


Version 1.0.0 will be achieved when the following milestones are completed:

- [x] CalorieNinjas API implemented
- [x] Basic UX/UI
- [ ] Schedule
- [ ] Index (Cover Page)
- [x] Navigation
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
