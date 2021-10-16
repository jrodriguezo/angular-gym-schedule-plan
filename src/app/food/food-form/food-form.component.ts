import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CalorieNinjaService } from '../calorie-ninja/calorie-ninja.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  /* To check if needs customize macros */
  customizeMacros = false;

  /* Getting values from food-form*/
  id = 0;
  recipeName = '';
  recipePros = 0;
  recipeCarbs = 0;
  recipeFats = 0;

  /* Sum of every proteins, carbohydrates and fats added in the table*/
  sumPros = 0;
  sumCarbs = 0;
  sumFats = 0;
  sumSugars = 0;
  sumCalories = 0;

  /* Response from CaloriesNinja saved in an array to iterate */
  foods: any = [];

  /* Creating a new food with macros and ingredients*/
  recipes: Recipe[] = [];

  onNewRecipe(){
    this.newRecipe(this.id,this.recipeName,this.recipePros,this.recipeCarbs,this.recipeFats);
  }

  totalRecipes(recipes: Recipe[]){
    this.sumPros = 0;
    this.sumCarbs = 0;
    this.sumFats = 0;
    this.sumSugars = 0;
    this.sumCalories = 0;
    for(var i = 0; i < recipes.length; i++){
      this.sumPros += recipes[i].proteins;
      this.sumCarbs += recipes[i].carbohydrates;
      this.sumFats += recipes[i].fats;
      this.sumSugars += recipes[i].sugars;
      this.sumCalories += recipes[i].calories;
    }

    //Just taking 2 decimals to show in table
    this.sumPros = +(this.sumPros.toFixed(2));
    this.sumCarbs = +(this.sumCarbs.toFixed(2));
    this.sumFats = +(this.sumFats.toFixed(2));
    this.sumSugars = +(this.sumSugars.toFixed(2));
    this.sumCalories = +(this.sumCalories.toFixed(2));
  }

  onDeleteRecipe(key: number){
    this.recipes.forEach((value,index)=>{
        if(value.id==key) this.recipes.splice(index,1);
    });
    this.totalRecipes(this.recipes);
  }

  newRecipe(id: number, name: string, proteins: number, carbohydrates: number, fats: number){
    this.calorieNinjaService.getFood(name).subscribe(data =>{
      console.log(data);
      let apiResponse = Object.values(data);
      if(apiResponse[0].length !== 0 && !this.customizeMacros){
        let foodMacrosResponse = apiResponse[0][0];
        let fullFoodName = name + ' (' + foodMacrosResponse.serving_size_g + 'g)';
        name = fullFoodName;
        this.foods.push(foodMacrosResponse);
        this.recipes.push(new Recipe(
          id,
          name,
          foodMacrosResponse.serving_size_g,
          foodMacrosResponse.protein_g,
          foodMacrosResponse.carbohydrates_total_g,
          foodMacrosResponse.fat_total_g,
          foodMacrosResponse.sugar_g,
          foodMacrosResponse.calories
          ));
      }else{
        this.recipes.push(new Recipe(id,name,100,proteins,carbohydrates,fats,0,0));
      }
      this.totalRecipes(this.recipes);
    });
    this.id++;
    this.recipeName = '';
    this.recipePros = 0;
    this.recipeCarbs = 0;
    this.recipeFats = 0;
  }

  //displayedColumns = ['name','proteins','carbohydrates','fats'];

  constructor(public calorieNinjaService: CalorieNinjaService) { }


  ngOnInit(): void {
  }

}
