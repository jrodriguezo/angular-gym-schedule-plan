import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Food } from '../food.model';
import { CalorieNinjaService } from '../calorie-ninja/calorie-ninja.service';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TotalMacros } from '../totalMacros.model';


@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit, OnDestroy {

  /* To check if needs customize macros */
  customizeMacros = false;

  /* Default mode */
  private mode = 'create';
  private foodId: string;
  food: Food;
  /* Default spinner */
  isLoading = false;

  constructor(public calorieNinjaService: CalorieNinjaService, public foodsService: FoodsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('foodId')){
        this.mode = 'edit';
        this.foodId = paramMap.get('foodId');
        this.isLoading = true;
        this.foodsService.getFood(this.foodId).subscribe((response) => {
          this.isLoading = false;
          this.food = response.foodById;
        });
      }else{
        this.mode = 'create';
        this.foodId = null;
      }
    });
  }

  ngOnDestroy(): void {

  }

  onSaveFood(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const food: Food = {
      id: (!this.foodId) ? 'null' : this.foodId,
      name: form.value.foodName,
      proteins: (!form.value.foodPros) ? '0' : form.value.foodPros,
      carbohydrates: (!form.value.foodCarbs) ? '0' : form.value.foodCarbs,
      fats: (!form.value.foodFats) ? '0' : form.value.foodFats,
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

  newRecipe(food: Food){
    this.calorieNinjaService.getFood(food.name).subscribe(data =>{
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
}
