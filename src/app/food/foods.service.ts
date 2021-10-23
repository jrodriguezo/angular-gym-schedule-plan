import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foods: Food[] = [];
  private foodsUpdated = new Subject<Food[]>();

  constructor(private http: HttpClient){}

  getFoods(){
    this.http.get<{message: string, foods: Food[]}>('http://localhost:3000/api/foods')
    .subscribe((foodsData) => {
      this.foods = foodsData.foods;
      this.foodsUpdated.next([...this.foods]);
    });
  }

  getFoodsListener(){
    return this.foodsUpdated.asObservable();
  }

  addFood(food: Food){
    //Saving in server
    this.http.post<{message: string}>('http://localhost:3000/api/posts', food)
      .subscribe((responseData) => {
        console.log(responseData.message);
        //Saving in local
        this.foods.push(food);
        this.foodsUpdated.next([...this.foods]);
      });

  }
}
