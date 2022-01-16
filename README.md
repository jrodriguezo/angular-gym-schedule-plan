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

## Author 

[@jrodriguezo](https://github.com/jrodriguezo)
