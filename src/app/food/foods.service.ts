import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foods: Food[] = [];
  private foodsUpdated = new Subject<Food[]>();

  constructor(private http: HttpClient){}

  getFoods(){
    this.http
    .get<{message: string, foods: Food[]}>(
      'http://localhost:3000/api/foods'
      )
    .pipe(map((foodsData) =>{
      return foodsData.foods.map(food => {
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
      });
    }))
    .subscribe((transformedData) => {
      this.foods = transformedData;
      this.foodsUpdated.next([...this.foods]);
    });
  }

  getFoodsListener(){
    return this.foodsUpdated.asObservable();
  }

  getFood(id: string){
    return {...this.foods.find(p => p.id === id)};
  }

  addFood(food: Food){
    //Saving in server
    this.http.post<{message: string, foodId: string}>('http://localhost:3000/api/foods', food)
      .subscribe((responseData) => {
        //Saving in local
        const id = responseData.foodId;
        food.id = id;
        this.foods.push(food);
        this.foodsUpdated.next([...this.foods]);
      });
  }

  updateFood(food: Food){
    this.http.put("http://localhost:3000/api/foods/"+ food.id, food)
     .subscribe(response => console.log(response));
  }

  deleteFood(foodId: string){
    this.http.delete("http://localhost:3000/api/foods/"+ foodId)
      .subscribe(()=>{
        const updatedFoods = this.foods.filter(food => food.id !== foodId);
        this.foods = updatedFoods;
        this.foodsUpdated.next([...this.foods]);
      });

  }

}
