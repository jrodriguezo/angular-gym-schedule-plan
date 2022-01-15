# AngularGymSchedulePlan - Foods4Bulking 


![image](https://user-images.githubusercontent.com/36509669/142743726-1773ea02-f324-4e04-990a-7f642ca018de.png)

- Make your daily routine; Make a plan. Insert the foods you would like to get macros from the CalorieNinjas API data. If you are not agree with the response given, then you can modify them.

![image](https://user-images.githubusercontent.com/36509669/143782978-e7c5e82d-fb3e-4f95-97de-190d82ab9f6e.png)

- Use your personal account as follows:

![image](https://user-images.githubusercontent.com/36509669/143782861-b17cca9d-4c89-4aa6-adf7-eb6779a4af1d.png)

- Search your favourite food. Complete your plan.

![image](https://user-images.githubusercontent.com/36509669/143783051-220115cc-7e38-4970-ab87-0d1935994548.png)

Customize your macros (Not mandatory)

![image](https://user-images.githubusercontent.com/36509669/143783137-04c1eda7-5900-4847-bc5b-a605c411f64c.png)

- Basic user experience added

Spinners

![image](https://user-images.githubusercontent.com/36509669/143783092-de4cc4e1-9e6f-418a-acb0-592fbf5963d7.png)

+Spinners with sense of humor

![image](https://user-images.githubusercontent.com/36509669/143782886-e406d755-33af-48e1-8d02-dac86559bf93.png)

Validators in forms

![image](https://user-images.githubusercontent.com/36509669/143783198-0e057b34-9cfe-434e-a4f2-937ceefc556e.png)


### Version 1.0.0 will be achieved when the following milestones are completed:

- [x] CalorieNinjas API implemented
- [x] Basic UX/UI
- [ ] Schedule
- [x] Index (Cover Page)
- [x] Navigation
- [x] NodeJS / Express
- [x] MongoDB
- [x] Authentication
- [x] Authorization

# About the project

Steps to use the application:

In two differentes nodes (typically inside Visual Studio Code) run the following commands lines

- For angular client http://localhost:4200

```js
ng serve                                
```

- For starting Node.js in local http://localhost:3000

```js
npm run start:server                    
```

In two differentes CMDs (typically in Windows, typing 'cmd' on search box) for running database in MongoDB.

- Previously added two folders inside, for instance, in backend directory

```js
mongod --dbpath path\to\data\db         
```

- For openning the console line

```js
mongo localhost:27017                   
```

Finally, you will need update 'YOUR-Api-Key' in src/app/food/calorie-ninja/calorie-ninja.service.ts

```js
headers: { 'X-Api-Key': 'YOUR-Api-Key'}
```
<p align="center"> Just tested on W10 </p>

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
