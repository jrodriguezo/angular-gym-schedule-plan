import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Food } from '../food.model';
import { CalorieNinjaService } from '../calorie-ninja/calorie-ninja.service';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit, OnDestroy {

  /* To check if needs customize macros */
  customizeMacros = false;

  /* Getting values from food-form*/
  id = 0;

  /* Sum of every proteins, carbohydrates and fats added in the table*/
  sumPros = 0;
  sumCarbs = 0;
  sumFats = 0;
  sumSugars = 0;
  sumCalories = 0;

  /* Response from CaloriesNinja saved in an array to iterate */
  //foods: any = [];

  /* Creating a new food with macros and ingredients*/
  //recipes: Recipe[] = [];

  onSaveFood(form: NgForm){
    if (form.invalid) {
      return;
    }
    const food: Food = {
      id: (!this.foodId) ? 'null' : this.foodId,
      name: form.value.foodName,
      proteins: form.value.foodPros,
      carbohydrates: form.value.foodCarbs,
      fats: form.value.foodFats,
      serving_size_g: 0, // ¡WARNING! This is under development
      sugars: 0, // ¡WARNING! This is under development
      calories: 0 // ¡WARNING! This is under development
    }
    if(this.mode === 'create'){
        this.newRecipe(food);
    }else {

      console.log(food);
      this.foodsService.updateFood(food);
    }
    form.resetForm();
  }

  totalFoods(foods: Food[]){
    this.sumPros = 0;
    this.sumCarbs = 0;
    this.sumFats = 0;
    this.sumSugars = 0;
    this.sumCalories = 0;
    for(var i = 0; i < foods.length; i++){
      this.sumPros += foods[i].proteins;
      this.sumCarbs += foods[i].carbohydrates;
      this.sumFats += foods[i].fats;
      this.sumSugars += foods[i].sugars;
      this.sumCalories += foods[i].calories;
    }
    //Just taking 2 decimals to show in table
    this.sumPros = +(this.sumPros.toFixed(2));
    this.sumCarbs = +(this.sumCarbs.toFixed(2));
    this.sumFats = +(this.sumFats.toFixed(2));
    this.sumSugars = +(this.sumSugars.toFixed(2));
    this.sumCalories = +(this.sumCalories.toFixed(2));
  }

  newRecipe(food: Food){
    this.calorieNinjaService.getFood(food.name).subscribe(data =>{
      console.log(data);
      let apiResponse = Object.values(data);
      if(apiResponse[0].length !== 0 && !this.customizeMacros){
        let foodMacrosResponse = apiResponse[0][0];
        food.name = food.name + ' (' + foodMacrosResponse.serving_size_g + 'g)';
        const postFood: Food = {
          id: null,
          name: food.name,
          proteins: foodMacrosResponse.protein_g,
          carbohydrates: foodMacrosResponse.carbohydrates_total_g,
          fats: foodMacrosResponse.fat_total_g,
          serving_size_g: foodMacrosResponse.serving_size_g,
          sugars: foodMacrosResponse.sugar_g,
          calories: foodMacrosResponse.calories
        }
          this.foodsService.addFood(postFood);
      }else{
        this.foodsService.addFood(food);
      }
    });
  }


  constructor(public calorieNinjaService: CalorieNinjaService, public foodsService: FoodsService, public route: ActivatedRoute) { }

  private mode = 'create';
  private foodId: string;
  food: Food;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('foodId')){
        this.mode = 'edit';
        this.foodId = paramMap.get('foodId');
        this.food = this.foodsService.getFood(this.foodId);
      }else{
        this.mode = 'create';
        this.foodId = null;
      }
    });
  }

  ngOnDestroy(): void {

  }

}
