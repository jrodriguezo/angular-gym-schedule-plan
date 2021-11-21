import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foods: Food[] = [];
  private foodsUpdated = new Subject<{ foods: Food[], foodCount: number}>();

  constructor(private http: HttpClient, private router:  Router){}

  getFoods(foodsPerPage: number, currentPage: number){
    const queryParams = `?pageSize=${foodsPerPage}&page=${currentPage}`;
    this.http
    .get<{message: string, foods: Food[], maxFoods: number}>(
      'http://localhost:3000/api/foods' + queryParams
      )
    .pipe(map((foodsData) =>{
      return { foods: foodsData.foods.map(food => {
        //console.log(Object.keys(food));
        //JS need to do this before, because _id is not detected
        var foodJSON = JSON.parse(JSON.stringify(food));
        return {
          id: foodJSON._id,
          name: foodJSON.name,
          serving_size_g: foodJSON.serving_size_g,
          proteins: foodJSON.proteins,
          carbohydrates: foodJSON.carbohydrates,
          fats: foodJSON.fats,
          sugars: foodJSON.sugars,
          calories: foodJSON.calories
        };
      }), maxFoods: foodsData.maxFoods};
    }))
    .subscribe((transformedData) => {
      this.foods = transformedData.foods;
      this.foodsUpdated.next({ foods: [...this.foods], foodCount: transformedData.maxFoods});
    });
  }

  getFoodsListener(){
    return this.foodsUpdated.asObservable();
  }

  getFood(id: string){
    //return {...this.foods.find(p => p.id === id)};
    return this.http.get<{message: string, foodById: Food}>(
      "http://localhost:3000/api/foods/" + id
    );
  }

  addFood(food: Food){
    //Saving in server
    this.http.post<{message: string, foodId: string}>('http://localhost:3000/api/foods', food)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  updateFood(food: Food){
    this.http.put("http://localhost:3000/api/foods/"+ food.id, food)
     .subscribe(response => {
       this.router.navigate(['/']);
     });
  }

  deleteFood(foodId: string){
    return this.http.delete("http://localhost:3000/api/foods/"+ foodId);

  }

}
