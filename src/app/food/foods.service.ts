import { Injectable } from '@angular/core';
import { CalorieNinjaService } from './calorie-ninja/calorie-ninja.service';
import { Food } from './food.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foods: Food[] = [];
  private foodsUpdated = new Subject<Food[]>();

  getFoods(){
    return [...this.foods];
  }

  getFoodsListener(){
    return this.foodsUpdated.asObservable();
  }

  addFood(food: Food){
    this.foods.push(food);
    this.foodsUpdated.next([...this.foods]);
  }

  constructor(public calorieNijaService: CalorieNinjaService){}
}
